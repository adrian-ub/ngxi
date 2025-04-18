import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCartIcon],svg[marketeq-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.458a2.08 2.08 0 0 1 2.084 1.77l1 6.563l2.875 18.75l22.916-2.083l4.167-16.667H13.792"></svg:path></svg:g>`,
})
export class MarketeqCartIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
