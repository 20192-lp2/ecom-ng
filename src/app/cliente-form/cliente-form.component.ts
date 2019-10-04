import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private clienteService: ClienteService,
  ) {
  }
  ngOnInit() {
    this.clienteForm = this.formBuild.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }
  save(d) {
    console.log(d);
  }

}
