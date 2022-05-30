import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from './employee-details.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http:HttpClient) { }
  list:EmployeeDetails[]=[];
  EmployeeData:EmployeeDetails=new EmployeeDetails();
  readonly baseURL='https://localhost:44340/api/Employee';

  GetAllData():Observable<EmployeeDetails[]>
  {
    return this.http.get<EmployeeDetails[]>(this.baseURL);
  }

  InsertData()
  {
    return this.http.post(this.baseURL,this.EmployeeData);
  }

  UpdateData()
  {
    return this.http.put(`${this.baseURL}/${this.EmployeeData}`,this.EmployeeData.id)
  }

  DeleteData(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
  
  
}
