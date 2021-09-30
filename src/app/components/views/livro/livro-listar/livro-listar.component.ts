import { LivroService } from './../../../../services/livro.service';
import { Livro } from './../../../../models/Livro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrls: ['./livro-listar.component.css']
})
export class LivroListarComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.livroService.list().subscribe((livros) => {
      this.livros = livros;
    })
  }

  cadastrar(): void {
    this.router.navigate(['create']);
  }

}
