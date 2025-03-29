import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitFork],svg[lucide-git-fork]',
  host: {
    class: 'lucide lucide-git-fork',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="18" r="3" />
    <svg:circle cx="6" cy="6" r="3" />
    <svg:circle cx="18" cy="6" r="3" />
    <svg:path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
    <svg:path d="M12 12v3" />
  `,
})
export class LucideGitFork {}
