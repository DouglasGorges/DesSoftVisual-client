import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.css'],
})
export class LivroCadastrarComponent implements OnInit {
  autor!: string;
  titulo!: string;
  preco!: number;
  dataPublicacao!: Date;

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let livro: Livro = {
      autor: this.autor,
      titulo: this.titulo,
      preco: this.preco,
      dataPublicacao: this.dataPublicacao,
    };

    this.livroService.create(livro).subscribe((livroCriado) => {
      window.location.reload();
    });
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
