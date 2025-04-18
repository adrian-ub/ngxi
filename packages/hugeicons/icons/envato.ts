import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnvatoIcon],svg[hugeicons-envato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.62 9.719c-.043 1.33.121 2.803.68 4.046c.28.625.421.938.671.895s.276-.435.328-1.218c.338-5.138 4.763-10.621 9.936-11.375c.521-.077.782-.115 1.09.038c.307.153.44.401.706.898C23.478 11.316 20.138 22 11.58 22C4.848 22 .83 14.192 4.236 9.084c.543-.815.815-1.222 1.127-1.126s.294.65.258 1.76" color="currentColor"></svg:path>`,
})
export class HugeiconsEnvatoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
