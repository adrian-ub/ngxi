import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOneThirtyIcon],svg[openmoji-one-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiOneThirty0" d="M36 35.962v17m5.843-27.169l-5.773 10"></svg:path></svg:defs><svg:g fill="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiOneThirty0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiOneThirty0"></svg:use></svg:g>`,
})
export class OpenmojiOneThirtyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
