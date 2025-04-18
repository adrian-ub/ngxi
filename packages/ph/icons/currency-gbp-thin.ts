import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpThinIcon],svg[ph-currency-gbp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 208a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h4a32 32 0 0 0 32-32v-40H56a4 4 0 0 1 0-8h36V84a48 48 0 0 1 78.53-37a4 4 0 1 1-5.09 6.17A40 40 0 0 0 100 84v40h36a4 4 0 0 1 0 8h-36v40a40 40 0 0 1-16 32h100a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCurrencyGbpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
