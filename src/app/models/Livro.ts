export interface Livro {
  _id?: number;
  autor: string;
  titulo: string;
  preco: number;
  dataPublicacao: Date;
  criadoEm?: Date;
}