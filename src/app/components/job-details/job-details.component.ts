import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/job-service.service';
import { JobFormat } from 'src/app/models/job-format';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  
job?: JobFormat;

constructor(private jobService: JobServiceService, private actRoute: ActivatedRoute){}

ngOnInit(): void{

  const id = this.actRoute.snapshot.params['id'];

  this.jobService.getJob(id).subscribe(result => {
    this.job = result;
  })
}

}
