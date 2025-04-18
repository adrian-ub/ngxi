import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinsBitcoinIcon],svg[hugeicons-coins-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M3.1 11a7.179 7.179 0 0 0 9.9 9.9"></svg:path><svg:path d="M12 10h3.5M12 10V6.5h2M12 10v3.5h2m1.5-3.5c.828 0 1.5-.784 1.5-1.75s-.672-1.75-1.5-1.75H14m1.5 3.5c.828 0 1.5.784 1.5 1.75s-.672 1.75-1.5 1.75H14m0 0v1m0-8v-1"></svg:path></svg:g>`,
})
export class HugeiconsCoinsBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
