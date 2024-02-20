import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ajouterticket',
  templateUrl: './ajouterticket.component.html',
  styleUrls: ['./ajouterticket.component.css']
})
export class AjouterticketComponent {
  ticketForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.ticketForm = this.formBuilder.group({
      key: ['', Validators.required], // Include key field in the form
      fields: this.formBuilder.group({
        summary: ['', Validators.required],
        customfield_10016: ['', Validators.required],
        description: ['', Validators.required],
        issuetype: this.formBuilder.group({
          name: ['  ',]
        })
      })
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketService.createTicket(this.ticketForm.value).subscribe(
        (response) => {
          console.log('Ticket created successfully:', response);
          this.ticketForm.reset(); // Reset the form after submission
        },
        (error) => {
          console.error('Error creating ticket:', error);
          // Handle error appropriately, e.g., display an error message
        }
      );
    }
  }
}