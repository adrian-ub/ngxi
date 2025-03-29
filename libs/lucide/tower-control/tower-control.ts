import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTowerControl],svg[lucide-tower-control]',
  host: {
    class: 'lucide lucide-tower-control',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
    />
    <svg:path d="M8 13v9" />
    <svg:path d="M16 22v-9" />
    <svg:path d="m9 6 1 7" />
    <svg:path d="m15 6-1 7" />
    <svg:path d="M12 6V2" />
    <svg:path d="M13 2h-2" />
  `,
})
export class LucideTowerControl {}
