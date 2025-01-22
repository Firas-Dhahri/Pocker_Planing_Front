import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-updatesprint',
  templateUrl: './updatesprint.component.html',
  styleUrls: ['./updatesprint.component.css']
})
export class UpdatesprintComponent implements OnInit {
  sprintForm: FormGroup;
  sprintId!:number  ;
  sprintdetails:any;


  constructor(
    private formBuilder: FormBuilder,
    private sprintService: SprintsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.sprintForm = this.formBuilder.group({
      originBoardId: ['', Validators.required],
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      goal: ['', Validators.required],
      state: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const sprintIdParam = this.route.snapshot.paramMap.get('sprintId');
    if (sprintIdParam) {
      this.sprintId = +sprintIdParam; // Using the + operator for conversion
      this.sprintService.getSprintById(this.sprintId).subscribe(params => {
        this.loadSprintDetails();
      });
    } else {
      console.error('Sprint ID is undefined.');
    }
  }
  

  loadSprintDetails(): void {
    if (this.sprintId) {
      this.sprintService.getSprintById(this.sprintId).subscribe(
        (sprintDetails: any) => {
          this.sprintdetails = sprintDetails;
          this.patchFormWithSprintDetails();
        },
        error => {
          console.error('Error fetching sprint details:', error);
        }
      );
    } else {
      console.error('Sprint ID is undefined.');
    }
  }

  patchFormWithSprintDetails(): void {
    this.sprintForm.patchValue({
      originBoardId: this.sprintdetails.originBoardId,
      name: this.sprintdetails.name,
      startDate: this.sprintdetails.startDate,
      goal: this.sprintdetails.goal,
      state: this.sprintdetails.state,
      endDate: this.sprintdetails.endDate
    });
  }

  onSubmit(): void {
    if (this.sprintForm.valid ) {
      this.sprintService.updateSprintByKey(this.sprintId, this.sprintForm.value).subscribe(
        (response) => {
          console.log('Sprint updated successfully:', response);
          this.toastr.success('Sprint Updated successfully:', 'Success');
        },
        (error) => {
          console.error('Error updating sprint:', error);
          this.toastr.error('Error updating sprint', 'Error');
        }
      );
    } else {
      console.warn('Invalid form data or sprint ID is undefined.');
    }
  }
}  