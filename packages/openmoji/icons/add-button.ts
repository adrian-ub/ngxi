import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAddButtonIcon],svg[openmoji-add-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.073" cy="35.952" r="22.77" fill="#B1CC33"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36.073 22.327v27.25m13.625-13.625h-27.25"></svg:path><svg:circle cx="36.073" cy="35.952" r="23"></svg:circle></svg:g>`,
})
export class OpenmojiAddButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
