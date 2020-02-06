import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  lists: any = [];
  query = ''; // Used for searching 
  params = "";   //Used for sorting
  reverse = false;  //Used for sorting

  id = null;
  fullname = null;
  email = null;
  mobile = null;
  city = null;
  department = null;
  empData = {}
  constructor(private httpClient: HttpClient) { }

  /**
   * Fetch and print data from json server
   */

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/EmployeeData').subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }

  /**
   * 
   * @param id :Fetching individual id and deleting it.
   */
  delEmp(id)
  {
    this.httpClient.delete(`http://localhost:3000/EmployeeData/${id}`).subscribe();
    console.log(this.id);
  }
  /**
   * Function used for sorting
   */
  toggleUp()
  {
    this.params = "fullname";
    this.reverse = !this.reverse;
  }
}
