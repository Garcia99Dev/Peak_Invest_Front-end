import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  userId: number = 0;
  public userData: any;

  constructor(private data: DataService) { }

  ngOnInit(): void { }
  
  consultar() {
    this.data.getConsultarUsuario(this.userId).subscribe(
      (response: any) => {
        this.userData = response;
        console.log(this.userData);
      }
    );
  }

}
