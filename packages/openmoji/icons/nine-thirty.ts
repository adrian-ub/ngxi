import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNineThirtyIcon],svg[openmoji-nine-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiNineThirty0" d="M36 36.062v17m-.383-17.041h-11"></svg:path></svg:defs><svg:g fill="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiNineThirty0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiNineThirty0"></svg:use></svg:g>`,
})
export class OpenmojiNineThirtyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
