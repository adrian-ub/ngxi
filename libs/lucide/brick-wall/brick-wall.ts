import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBrickWall],svg[lucide-brick-wall]',
  host: {
    class: 'lucide lucide-brick-wall',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M12 9v6" />
    <svg:path d="M16 15v6" />
    <svg:path d="M16 3v6" />
    <svg:path d="M3 15h18" />
    <svg:path d="M3 9h18" />
    <svg:path d="M8 15v6" />
    <svg:path d="M8 3v6" />
  `,
})
export class LucideBrickWall {}
