import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCartAlt1Icon],svg[marketeq-cart-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.833a2.08 2.08 0 0 1 1.938 1.313l7.812 19.52l-2.666 5.313a2.084 2.084 0 0 0 1.875 3.02h19.541"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M15 12.5h28.75l-5.833 14.583H20.833"></svg:path></svg:g>`,
})
export class MarketeqCartAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
