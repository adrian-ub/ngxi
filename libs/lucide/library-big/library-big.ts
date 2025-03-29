import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLibraryBig],svg[lucide-library-big]',
  host: {
    class: 'lucide lucide-library-big',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="18" x="3" y="3" rx="1" />
    <svg:path d="M7 3v18" />
    <svg:path
      d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
    />
  `,
})
export class LucideLibraryBig {}
