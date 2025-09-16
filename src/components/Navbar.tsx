import { Link, useLocation } from 'react-router-dom';
import { Vault, PlusCircle, Home, History } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Create Vault', path: '/create', icon: PlusCircle },
    { name: 'History', path: '/history', icon: History },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Vault className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Multi-Sig Vault
            </span>
          </Link>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-primary text-primary-foreground glow-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-sm text-muted-foreground">
              Connected: 
              <span className="text-primary font-mono ml-1">0x1234...5678</span>
            </div>
            <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;