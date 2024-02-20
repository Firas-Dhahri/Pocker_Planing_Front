import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-afficher-ticketr',
  templateUrl: './afficher-ticketr.component.html',
  styleUrls: ['./afficher-ticketr.component.css']
})
export class AfficherTicketrComponent implements OnInit {
  tickets: any[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe(
      (response: any[]) => { // Change the type of response to match what you expect
        this.tickets = response;
        console.log('Tickets:', this.tickets);
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }
  deleteIssue(key:string | null){
    this.ticketService.deleteIssue(key).subscribe(
      (response) => { // Change the type of response to match what you expect
               console.log('Tickets deleted');
      },
      (error) => {
        console.error('Error deleting tickets:',error);
      }

    );
  }



}
