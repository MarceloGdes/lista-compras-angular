export interface ItemModel {
  id: string;
  nome: string;
  quantidade: number;
  unidade: string;
  categoria: string;
  stComprado: boolean;
}

export interface InsertUpdateItemModel {
  nome: string;
  quantidade: number;
  unidade: string;
  categoria: string;
}


