import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {
  list;
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {
    //this.list = this.clienteService.getList();
    this.clienteService.getList().subscribe(response => {
      this.list=response;
      //console.log("data = " + JSON.stringify(response));
    });
  }

  ngOnInit() {
  }

}
