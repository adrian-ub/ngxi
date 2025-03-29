import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNotepadText],svg[lucide-notepad-text]',
  host: {
    class: 'lucide lucide-notepad-text',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 2v4" />
    <svg:path d="M12 2v4" />
    <svg:path d="M16 2v4" />
    <svg:rect width="16" height="18" x="4" y="4" rx="2" />
    <svg:path d="M8 10h6" />
    <svg:path d="M8 14h8" />
    <svg:path d="M8 18h5" />
  `,
})
export class LucideNotepadText {}
