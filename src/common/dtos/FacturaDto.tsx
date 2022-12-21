import { DetalleFacturaGetDto } from './DetallefacturaGetDto';
export interface FacturaDto {
  id: number;

  clienteNombre: string;

  clienteCorreo: string;

  detalleFactura: DetalleFacturaGetDto[];
}
