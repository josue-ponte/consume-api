import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './models/User';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'consume-api';

  user : User = null;
  constructor(private usersService: UsersService,
    private activatedRoute : ActivatedRoute,) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void{
    console.log('El componente se ha inicializado');
    const ruc = this.activatedRoute.snapshot.params.ruc;
    this.usersService.getUserByRuc(ruc).
    subscribe(response => this.user = response);
  }


}
