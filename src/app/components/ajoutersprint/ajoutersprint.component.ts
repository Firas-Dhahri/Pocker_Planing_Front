import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-ajoutersprint',
  templateUrl: './ajoutersprint.component.html',
  styleUrls: ['./ajoutersprint.component.css']
})
export class AjoutersprintComponent implements OnInit {
  sprintForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sprintService: SprintsService,
    private toastr: ToastrService
  ) {
    this.sprintForm = this.formBuilder.group({
      originBoardId: ['', Validators.required],
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      goal: ['', Validators.required],
      state: ['', Validators.required], // Added state field with required validator
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.sprintForm.valid) {
      this.sprintService.createSprint(this.sprintForm.value).subscribe(
        (response) => {
          console.log('Sprint created successfully:', response);
          this.toastr.success('Sprint created successfully:', 'Success');
          this.sprintForm.reset(); // Reset the form after submission
        },
        (error) => {
          console.error('Error creating sprint:', error);
          this.toastr.error(error.message, 'Error');
          // Handle error appropriately, e.g., display an error message
        }
      );
    }
  }
}
