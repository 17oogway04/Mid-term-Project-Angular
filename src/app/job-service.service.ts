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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper nibh vel mauris ornare egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec enim rhoncus eros sagittis egestas. Morbi sed lacinia eros. Nulla lectus purus, sagittis ac nibh ut, accumsan bibendum urna. Donec vulputate sem id turpis vestibulum posuere. Morbi quis tortor at tortor scelerisque porta in eget tortor. Etiam consectetur, nunc non placerat fringilla, orci diam aliquam lectus, ut sodales sem neque eu augue. Vivamus convallis tellus ac ex vulputate rutrum. In fermentum sodales sapien ut condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent dapibus luctus augue, in sollicitudin enim mattis ut. Duis tristique ultrices porttitor. Donec id eleifend metus. Pellentesque pretium egestas lacus et placerat. Quisque auctor aliquet aliquam.",
    duration: "2 years",
    employer: "ABC BANKING"
  }, 
  {
    id: 2,
    title: "Cashier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tempus sagittis. Suspendisse id pulvinar mi. Curabitur elementum in nulla sit amet pulvinar. Maecenas quis faucibus enim, vel luctus magna. Nulla a tempus enim. Donec a ante consequat, aliquet lorem sit amet, mollis tellus. Sed velit urna, tincidunt quis interdum in, hendrerit ac neque.",
    duration: "5 years",
    employer: "CHICK FIL A"
  }, 
  {
    id: 3,
    title: "Produce stocker",
    description: "Morbi augue leo, viverra ut quam id, accumsan egestas turpis. Nulla a malesuada urna, ac ullamcorper ipsum. Nunc ornare quis arcu non vulputate. Aenean vel mi et lacus accumsan porttitor. Fusce ac luctus erat. Mauris a feugiat nisi. Duis urna orci, egestas ac felis nec, dictum pretium quam. Maecenas et dui et leo ultricies malesuada at eget ligula. Etiam malesuada volutpat congue. Donec ut massa laoreet, faucibus nisi at, maximus magna. Ut suscipit diam at nulla molestie, at venenatis eros egestas.",
    duration: "2 months",
    employer: "WALMART" 
  }]
  title: string = "Work History"
  constructor() { }

  getJobs(): Observable<JobFormat[]>{
    return of (this.listOfJobs)
  }

  getJob(id: number): Observable<JobFormat | undefined>
    {
      return of(this.listOfJobs.find(j => j.id == id));
    }
}
