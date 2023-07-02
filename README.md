## QUANDO NÃO UTILIZAR ESTADOS NO REACT

-


## UNCONTROLLED X CONTROLLED FORMS
- uncontrolled seria forms controlados por refs
- controlled seria forms controlados por states
- os controlled forms geram mais renderização e afetam a performance
por está causando re-renderização a cada mudança de estado.
- maioria das libs de formularios são uncontrolled
-

## Processos de criação de componentes React
1. Criar estrutura HTML do componente
2. Criar estilos, seguindo a estrutura HTML criada anteriormente
3. Criar states (se necessário)
4. Criar funções (se necessário)
5. Tratar eventos (se necessário)
6. Organizar o useEffect (se necessário)
