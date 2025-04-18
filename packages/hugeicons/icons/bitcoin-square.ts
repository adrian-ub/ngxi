import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinSquareIcon],svg[hugeicons-bitcoin-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M9 12h4.2M9 12V9.296c0-.471 0-.707.146-.853c.147-.147.383-.147.854-.147h3.2c.994 0 1.8.83 1.8 1.852S14.194 12 13.2 12M9 12v2.704c0 .471 0 .707.146.853c.147.147.383.147.854.147h3.2c.994 0 1.8-.83 1.8-1.852S14.194 12 13.2 12m-2.706-3.704V7m0 10v-1.296m2.404-7.408V7m0 10v-1.296"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
