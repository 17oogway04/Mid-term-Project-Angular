import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
currentJobID!: number;
currentJob!: string;

constructor(private jobService: JobServiceService, private actRoute: ActivatedRoute){}

ngOnInit(): void{
  this.currentJobID = parseInt(this.actRoute.snapshot.paramMap.get("jobId") ?? "");
  this.jobService.getJob(this.currentJobID).subscribe(foundJob => {
    this.currentJob = foundJob;
  })
}

}
