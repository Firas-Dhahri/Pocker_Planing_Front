import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {
  private baseUrl = 'http://localhost:8090/Pocker/sprints';

  constructor(private http: HttpClient) { }

  createSprint(sprintData: any) {
    return this.http.post<any>(`${this.baseUrl}/ajoutersprint`, sprintData);
  } 
  getAllSprints(boardId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/affichersprint/${boardId}`); 
  }

  deleteSprint(sprintId: number) {
    return this.http.delete<any>(`${this.baseUrl}/delete/${sprintId}`);
  }
  getAllBoardNames() {
    return this.http.get<string[]>(`${this.baseUrl}/getProjectName`);
  }

  getSprintsByBoardName(boardName: string) {
    return this.http.get<any[]>(`${this.baseUrl}/board/${boardName}`);
  }
  getSprintById(sprintId:number){
    return this.http.get<any[]>(`${this.baseUrl}/sprints/${sprintId}`); // Adjust the type to match the expected response


  }
  updateSprintByKey(sprintId: number, sprintData: any) {
      const url = `${this.baseUrl}/update/${sprintId}`;
    return this.http.put<any>(url, sprintData);
  }

}
