import { ReactNode } from 'react';

type RenderIfProps = {
  conditional: boolean;
  children: ReactNode;
};
const RenderIf = ({ conditional, children }: RenderIfProps) => {
  return <>{conditional && children}</>;
};

const Input = ({ placeholder }: { placeholder: string }) => {
  return <input type="text" placeholder={placeholder} />;
};

const Ternary = () => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? (
        <Input placeholder="componente 1" />
      ) : (
        <Input placeholder="componente 2" />
      )}
    </>
  );
};

const NonTernary = () => {
  const isAdmin = false;

  return (
    <>
      {isAdmin && <Input placeholder="componente 1" />}
      {!isAdmin && <Input placeholder="componente 2" />}
      <RenderIf conditional={isAdmin}>
        <Input placeholder="componente 3" />
      </RenderIf>
      <RenderIf conditional={!isAdmin}>
        <Input placeholder="componente 4" />
      </RenderIf>
    </>
  );
};

export default function NoTernary() {
  return (
    <section className="w-100 h-screen flex items-center justify-center">
      <Ternary />
      <NonTernary />
    </section>
  );
}

/*
O react quando se utiliza if ternario
qualquer mudança na condição do if que utilize o mesmo componente
invés de desmonta-lo e montar um novo do zero
irá apenas substituir os valores novos indicados
em alguns casos o fato do componente não ser desmontado
pode trazer problemas.
Caso use:
- deixar a condição do ternário simples.
- jamais usar ternários aninhados.
- sempre que for testar um valor no jsx transformar em booleano.
*/
