import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCommentIcon],svg[openmoji-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiComment0" fill="none" stroke="#000" d="M23.437 50.356C22.105 53.88 18.432 58.712 15 61c7.165 0 12.234-2.092 16-7.273"></svg:path></svg:defs><svg:g fill="#FCEA2B"><svg:circle cx="36" cy="35" r="20.8"></svg:circle><svg:path d="M23.437 50.356C22.105 53.88 18.432 58.712 15 61c7.165 0 12.234-2.092 16-7.273"></svg:path></svg:g><svg:circle cx="26" cy="35.079" r="2.857"></svg:circle><svg:circle cx="36" cy="35.079" r="2.857"></svg:circle><svg:circle cx="46" cy="35.079" r="2.857"></svg:circle><svg:use href="#openmojiComment0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:use href="#openmojiComment0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M20.48 47.617A19.92 19.92 0 0 1 16 35c0-11.046 8.954-20 20-20s20 8.954 20 20s-8.954 20-20 20q-.555 0-1.104-.03"></svg:path>`,
})
export class OpenmojiCommentIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
