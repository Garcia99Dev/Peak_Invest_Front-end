import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  parcelas: number = 0;
  valor: number = 0;
  public investimento: any;

  constructor(private data: DataService) { }

  ngOnInit(): void { }
  
  simular() {
    this.data.postSimularInvestimento(this.parcelas, this.valor).subscribe(
      (response: any) => {
        this.investimento = response;
        console.log(this.investimento);
      }
    );
  }
}
