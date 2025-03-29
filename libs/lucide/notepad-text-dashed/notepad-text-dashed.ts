import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNotepadTextDashed],svg[lucide-notepad-text-dashed]',
  host: {
    class: 'lucide lucide-notepad-text-dashed',
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
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M20 12v2" />
    <svg:path d="M20 18v2a2 2 0 0 1-2 2h-1" />
    <svg:path d="M13 22h-2" />
    <svg:path d="M7 22H6a2 2 0 0 1-2-2v-2" />
    <svg:path d="M4 14v-2" />
    <svg:path d="M4 8V6a2 2 0 0 1 2-2h2" />
    <svg:path d="M8 10h6" />
    <svg:path d="M8 14h8" />
    <svg:path d="M8 18h5" />
  `,
})
export class LucideNotepadTextDashed {}
