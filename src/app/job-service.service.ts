import { Injectable } from '@angular/core';
import { JobFormat } from './models/job-format';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  listOfJobs: JobFormat[]= [{
    id: 1,
    title: "Banker",
    description: "I was banking all day long",
    duration: "2 years",
    employer: "ABC BANKING"
  }, 
  {
    id: 2,
    title: "Cashier",
    description: "I handled cash all day",
    duration: "5 years",
    employer: "CHICK FIL A"
  }, 
  {
    id: 3,
    title: "Produce stocker",
    description: "I handled fruit all day",
    duration: "2 months",
    employer: "WALMART" 
  }]
  title: string = "Work History"
  constructor() { }

  getJobs(): Observable<JobFormat[]>{
    return of (this.listOfJobs)
  }


}
