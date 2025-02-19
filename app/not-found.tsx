import Link from "next/link";
import { Button } from "./ui/button/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-8 h-[65vh]">
      <div className="text-center">
        <h1 className="mt-60 mb-16 text-8xl">404</h1>
        <p>La ruta que busca no ha sido encontrada.</p>
        <Button href="/" color="primary" text="Volver a Inicio" className="mt-16"></Button>
      </div>
    </div>
  );
}
