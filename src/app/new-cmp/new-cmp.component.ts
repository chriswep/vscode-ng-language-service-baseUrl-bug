import { Component, OnInit } from '@angular/core';

import { MyNewServiceService } from 'app/services/my-new-service/my-new-service.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor(
    private systemService: MyNewServiceService,
  ) { }

  ngOnInit() {
  }

}
