import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouteContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouteContext = createContext<RouteContextValue>({ path: '/', navigate: () => {} });

export function useRouter() {
  return useContext(RouteContext);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.replace(/^#/, '') || '/';
    }
    return '/';
  });

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.replace(/^#/, '') || '/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return <RouteContext.Provider value={{ path, navigate }}>{children}</RouteContext.Provider>;
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
