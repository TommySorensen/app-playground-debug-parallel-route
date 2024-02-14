import { Boundary } from '#/ui/boundary';

export default async function LocaleLayout({ children }) {
  return (
    <Boundary labels={['locale/layout.tsx']} color="cyan">
      {children}
    </Boundary>
  );
}
