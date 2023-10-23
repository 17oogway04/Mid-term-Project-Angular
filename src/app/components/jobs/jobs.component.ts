import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';
import { JobFormat } from 'src/app/models/job-format';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{

  title: string = '';
  jobList: JobFormat[]= [];

  constructor(private myJobService: JobServiceService){}

  ngOnInit(): void {
    this.title = this.myJobService.title;
    this.myJobService.getJobs()
      .subscribe(response => this.jobList = response);
  }
}
