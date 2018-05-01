import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { VoterService } from '../../services/voterroll.service'

@Component({
    templateUrl: './fetchvoter.component.html'
})

export class FetchVoterComponent {

    public voterList: VoterData[];

    constructor(public http: Http, private _router: Router, private _voterService: VoterService) {
        this.getVoters();
    }

    getVoters() {
        this._voterService.getVoters().subscribe(
            (data) => {
            this.voterList = data
            }, error => console.error(error))
    }

    delete(voterId) {
        var ans = confirm("Do you want to delete customer with Id: " + voterId);
        if (ans) {
            this._voterService.deleteVoter(voterId).subscribe((data) => {
                this.getVoters();
            }, error => console.error(error))
        }
    }
}

interface VoterData {
    voterId: number;
    fullName: string;

}