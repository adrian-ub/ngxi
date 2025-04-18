import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCartRemoveIcon],svg[marketeq-cart-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M35.417 16.667h-12.5"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.583a2.084 2.084 0 0 1 2.084 1.625l5.458 23.833a2.08 2.08 0 0 0 2.083 1.625H38a2.084 2.084 0 0 0 2.083-1.583l3.667-15.083"></svg:path></svg:g>`,
})
export class MarketeqCartRemoveIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
