import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFunnelPlus],svg[lucide-funnel-plus]',
  host: {
    class: 'lucide lucide-funnel-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"
    />
    <svg:path d="M16 6h6" />
    <svg:path d="M19 3v6" />
  `,
})
export class LucideFunnelPlus {}
