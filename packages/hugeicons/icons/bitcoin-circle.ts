import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinCircleIcon],svg[hugeicons-bitcoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M9 12h4.2M9 12V9.296c0-.471 0-.707.146-.853c.147-.147.383-.147.854-.147h3.2c.994 0 1.8.83 1.8 1.852S14.194 12 13.2 12M9 12v2.704c0 .471 0 .707.146.853c.147.147.383.147.854.147h3.2c.994 0 1.8-.83 1.8-1.852S14.194 12 13.2 12m-2.706-3.704V7m0 10v-1.296m2.404-7.408V7m0 10v-1.296"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
