import { Link, useLocation } from 'react-router-dom';
import { Vault, PlusCircle, Home, History, ChevronDown, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useVault } from '@/context/VaultContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const location = useLocation();
  const { currentUser, setCurrentUser, availableAccounts } = useVault();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Connected: </span>
                    <span className="text-primary font-mono">
                      {availableAccounts.find(acc => acc.address === currentUser)?.name || 'Unknown'}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {availableAccounts.map((account) => (
                  <DropdownMenuItem 
                    key={account.address}
                    onClick={() => setCurrentUser(account.address)}
                    className="flex items-center justify-between p-3"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{account.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {account.address}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {currentUser === account.address && (
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(account.address);
                          setCopiedAddress(account.address);
                          setTimeout(() => setCopiedAddress(null), 2000);
                        }}
                        className="h-6 w-6 p-0"
                      >
                        {copiedAddress === account.address ? (
                          <Check className="h-3 w-3 text-success" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;