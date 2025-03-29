import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWalletMinimal],svg[lucide-wallet-minimal]',
  host: {
    class: 'lucide lucide-wallet-minimal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 14h.01" />
    <svg:path
      d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
    />
  `,
})
export class LucideWalletMinimal {}
