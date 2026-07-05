import { Component } from '@angular/core';

// Structure d'un projet affiché dans le portfolio.
// Les liens sont optionnels : certains projets (homelab local) n'ont ni démo publique ni repo.
interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  demo?: string;
  repo?: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  skills = [
    'Linux', 'Docker', 'Proxmox', 'LXC',
    'Angular', 'TypeScript', 'HTML/CSS', 'Bash',
    'SQL', 'Laravel', 'PHP', 'Git',
    'Nginx', 'Réseau', 'DNS', 'SSH'
  ];

  // Aucun credential ni IP ici : on ne décrit que l'architecture et les services.
  projects: readonly Project[] = [
    {
      title: 'Homelab auto-hébergé (Proxmox + Docker)',
      description:
        "Serveur maison sous Proxmox VE 9.1 hébergeant 7 conteneurs LXC Debian : " +
        "Pi-hole (DNS + blocage pubs), WireGuard (VPN), NAS Samba, Plex, un reverse proxy " +
        "Nginx Proxy Manager dockerisé, et ce portfolio lui-même. Réseau segmenté, DNS interne " +
        "et accès distant sécurisé via VPN.",
      tags: ['Proxmox', 'LXC', 'Docker', 'Nginx', 'WireGuard', 'Linux', 'DNS']
    }
  ];

  github = 'https://github.com/neben23';
  email = 'hansen.benjamin.pro@gmail.com';
}
