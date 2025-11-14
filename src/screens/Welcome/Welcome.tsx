import React from "react";
import { Button } from "../../components/ui/button";

export const Welcome = (): JSX.Element => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-6 px-[30px] py-8 bg-[#567159]">
      <div className="flex flex-col items-center gap-6 w-full max-w-[352px]">
        <div className="relative w-[76px] h-[88px] mb-8">
          <img
            className="absolute w-[99.74%] h-[93.78%] top-0 left-0"
            alt="Alplatech Logo"
            src="/vector-1.svg"
          />
          <img
            className="absolute w-[60.00%] h-[56.22%] top-[43.56%] left-[20.26%]"
            alt="Alplatech Logo Inner"
            src="/vector-2.svg"
          />
        </div>

        <h1 className="[font-family:'Ubuntu_Sans',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[normal]">
          Olá!
        </h1>

        <p className="[font-family:'Ubuntu_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] text-center">
          Seja bem-vindo a Alplatech
        </p>

        <Button className="w-full h-[50px] bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-lg shadow-[0px_4px_4px_2px_#00000040] [font-family:'Ubuntu_Sans',Helvetica] font-light text-black text-base">
          Entrar
        </Button>

        <Button
          variant="outline"
          className="w-full h-[50px] bg-[#00000008] hover:bg-[#00000015] rounded-lg border border-solid border-black shadow-[0px_4px_4px_2px_#00000040] [font-family:'Ubuntu_Sans',Helvetica] font-light text-black text-base"
        >
          Registre-se
        </Button>
      </div>
    </main>
  );
};
