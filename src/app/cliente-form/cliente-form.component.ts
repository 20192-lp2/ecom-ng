import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    private router: Router,
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
  save() {
    console.log(this.clienteForm.value);
    this.clienteService.add(this.clienteForm.value).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/clienteindex']);
  }

}
