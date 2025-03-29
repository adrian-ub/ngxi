import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePenTool],svg[lucide-pen-tool]',
  host: {
    class: 'lucide lucide-pen-tool',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
    />
    <svg:path
      d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
    />
    <svg:path d="m2.3 2.3 7.286 7.286" />
    <svg:circle cx="11" cy="11" r="2" />
  `,
})
export class LucidePenTool {}
