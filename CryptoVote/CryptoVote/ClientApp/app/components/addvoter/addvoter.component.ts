import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchVoterComponent } from '../fetchvoter/fetchvoter.component';
import { VoterService } from '../../services/voterroll.service';

@Component({
    templateUrl: './AddVoter.component.html'
})

export class createvoter implements OnInit {
    voterForm: FormGroup;
    title: string = "Create";
    voterId  : number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _voterService: VoterService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.voterId = this._avRoute.snapshot.params["id"];
        }

        this.voterForm = this._fb.group({
            voterId: 0,
            fullName: ['', [Validators.required]]
        })
    }

    ngOnInit() {

        if (this.voterId > 0) {
            this.title = "Edit";
            this._voterService.getVoterById(this.voterId)
                .subscribe(resp => this.voterForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.voterForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._voterService.saveVoter(this.voterForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-voter']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._voterService.updateVoter(this.voterForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-voter']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-voter']);
    }

    //get fullName() {
    //    return this.voterForm.get('fullName');
    //}
}  