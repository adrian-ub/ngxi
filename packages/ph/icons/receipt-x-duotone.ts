import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReceiptXDuotoneIcon],svg[ph-receipt-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v152l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v152a8 8 0 0 0 11.58 7.15L64 200.94l28.42 14.21a8 8 0 0 0 7.16 0L128 200.94l28.42 14.21a8 8 0 0 0 7.16 0L192 200.94l28.42 14.21A8 8 0 0 0 232 208V56a16 16 0 0 0-16-16m0 155.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 199.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 199.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 195.06V56h176ZM98.34 138.34L116.69 120l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 108.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 120l18.35 18.34a8 8 0 0 1-11.32 11.32L128 131.31l-18.34 18.35a8 8 0 0 1-11.32-11.32"></svg:path></svg:g>`,
})
export class PhReceiptXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
