import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGasStoveIcon],svg[hugeicons-gas-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 6c0-3.31.69-4 4-4h12c3.31 0 4 .69 4 4v12c0 3.31-.69 4-4 4H6c-3.31 0-4-.69-4-4zm4 13h4m8 .009V19"></svg:path><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:path d="M15.5 10H17m-5 3.5V15m-3.5-5H7m5-3.5V5"></svg:path></svg:g>`,
})
export class HugeiconsGasStoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
