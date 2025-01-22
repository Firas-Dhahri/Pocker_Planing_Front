import { Component, OnInit } from '@angular/core';
import { SprintsService } from 'src/app/services/sprints.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-afficher-sprints',
  templateUrl: './afficher-sprints.component.html',
  styleUrls: ['./afficher-sprints.component.css']
})
export class AfficherSprintsComponent implements OnInit {
  sprints: any[] = [];
  boardNames: string[] = [];
  selectedBoardName: string | undefined;

  constructor(private sprintservice: SprintsService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllBoardNames();
    this.fetchBoardNames();

  }
  fetchBoardNames(): void {
    this.sprintservice.getAllBoardNames().subscribe(
      (data: string[]) => {
        this.boardNames = data;
      },
      (error) => {
        console.error('Error fetching board names:', error);
      }
    );
  }
  loadSprints(): void {
    if (this.selectedBoardName) {
      this.sprintservice.getSprintsByBoardName(this.selectedBoardName).subscribe(
        (data: any[]) => {
          this.sprints = data;
        },
        (error) => {
          console.error('Error fetching sprints:', error);
        }
      );
    } else {
      this.sprints = []; // Clear the sprints array if no board is selected
    }
  }

  getAllBoardNames(): void {
    this.sprintservice.getAllBoardNames().subscribe(
      (boardNames: string[]) => {
        this.boardNames = boardNames;
      },
      (error) => {
        console.error('Error fetching board names:', error);
      }
    );
  }

  getAllSprintsByBoardName(): void {
    if (this.selectedBoardName) {
      this.sprintservice.getSprintsByBoardName(this.selectedBoardName).subscribe(
        (response: any[]) => {
          this.sprints = response;
          console.log('Sprints:', this.sprints);
        },
        (error) => {
          console.error('Error fetching sprints:', error);
        }
      );
    } else {
      console.warn('No board selected.');
    }
  }
  deleteSprint(id: number): void {
   
  
    this.sprintservice.deleteSprint(id).subscribe(
      () => {
        console.log('Sprint deleted successfully.');
        // Check if the sprint was actually deleted from the array
        const deletedIndex = this.sprints.findIndex(sprint => sprint.id === id);
        if (deletedIndex !== -1) {
          this.sprints.splice(deletedIndex, 1); // Remove the deleted sprint from the array
          this.toastr.success('Sprint deleted successfully.', 'Success');
        } else {
          console.warn('Sprint not found in the local array.');
        }
      },
      error => {
        console.error('Error deleting sprint:', error);
        this.toastr.error('Error deleting sprint. Please try again.', 'Error');
      }
    );
  }
  
  
}
  
