import { FacturaGetDto } from './FacturaGetDto';

export interface DetalleFacturaGetDto {
  id: number;

  facturaId: number;

  producto: string;

  cantidad: number;

  precio: number;

  total: number;

  factura: FacturaGetDto;
}
