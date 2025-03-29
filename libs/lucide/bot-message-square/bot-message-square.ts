import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBotMessageSquare],svg[lucide-bot-message-square]',
  host: {
    class: 'lucide lucide-bot-message-square',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6V2H8" />
    <svg:path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
    <svg:path d="M2 12h2" />
    <svg:path d="M9 11v2" />
    <svg:path d="M15 11v2" />
    <svg:path d="M20 12h2" />
  `,
})
export class LucideBotMessageSquare {}
