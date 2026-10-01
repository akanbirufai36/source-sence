import { RouterProvider, useRouter } from '@/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AIToolsPage } from '@/pages/AIToolsPage';
import { TechTipsPage } from '@/pages/TechTipsPage';
import { CybersecurityPage } from '@/pages/CybersecurityPage';
import { StudentHubPage } from '@/pages/StudentHubPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

function Routes() {
  const { path } = useRouter();

  const page = (() => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/ai-tools':
        return <AIToolsPage />;
      case '/tech-tips':
        return <TechTipsPage />;
      case '/cybersecurity':
        return <CybersecurityPage />;
      case '/student-hub':
        return <StudentHubPage />;
      case '/resources':
        return <ResourcesPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  })();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}

export default App;
