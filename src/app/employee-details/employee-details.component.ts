import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../shared/employee-details.model';
import { EmployeeDetailsService } from '../shared/employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
    this.service.GetAllData().subscribe(d=>this.service.list=d)
  }

  onDelete(id:number)
  {
    if(confirm('Are you want to delete ?'))
    {
      this.service.DeleteData(id).subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.list=d)
      })
    }
    
  }


  populateForm(selectedRecord:EmployeeDetails)
  {
    this.service.EmployeeData=Object.assign({},selectedRecord);
  }
}
