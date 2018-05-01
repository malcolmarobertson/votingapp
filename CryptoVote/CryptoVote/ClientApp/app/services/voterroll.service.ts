import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class VoterService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl + 'api/Voter/';
    }

    getVoters() {
        return this._http.get(this.myAppUrl + 'Index') 
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getVoterById(voterId: number) {
        return this._http.get(this.myAppUrl + 'Details/' + voterId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveVoter(voter) {
        return this._http.post(this.myAppUrl + 'Create', voter)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updateVoter(voter) {
        return this._http.put(this.myAppUrl + 'Edit', voter)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteVoter(voterId) {
        return this._http.delete(this.myAppUrl + 'Delete/' + voterId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}  