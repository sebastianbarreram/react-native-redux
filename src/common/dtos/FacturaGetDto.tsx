import { DetalleFacturaGetDto } from './DetallefacturaGetDto';
export interface FacturaGetDto {
  id: number;

  clienteNombre: string;

  clienteCorreo: string;

  detalleFactura: DetalleFacturaGetDto[];
}
