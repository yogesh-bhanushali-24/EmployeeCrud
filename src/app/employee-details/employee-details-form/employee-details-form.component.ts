import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailsService } from 'src/app/shared/employee-details.service';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.css']
})
export class EmployeeDetailsFormComponent implements OnInit {

  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    if(this.service.EmployeeData.id==0)
    {
      this.Insert(form)
    }
    else
    {
      this.Update(form);
    }
  }

  Insert(form:NgForm)
  {
    
    form.value.enrollNo=Number(form.value.enrollNo);
      this.service.EmployeeData=form.value;
      this.service.InsertData().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.list=d),
        form.reset(),
        alert('data insert successfully')
      })
  }

  Update(form:NgForm)
  {
    this.service.EmployeeData=form.value;
      this.service.UpdateData().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.list=d),
        form.reset(),
        alert('data update successfully')
      })
  }

}
