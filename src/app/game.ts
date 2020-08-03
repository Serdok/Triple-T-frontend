export interface Game {
  id: string;
  tiles: ('X' | 'O')[];
  xIsNext: boolean;
  createTime?: string;
  updateTime?: string;
}
