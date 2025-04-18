import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRedExclamationMarkIcon],svg[openmoji-red-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiRedExclamationMark0" d="M35.987 49.373a2.5 2.5 0 0 1-2.5-2.5v-35.21a2.5 2.5 0 1 1 5 0v35.21a2.5 2.5 0 0 1-2.5 2.5"></svg:path></svg:defs><svg:g fill="#D22F27" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36.093" cy="58.842" r="3"></svg:circle><svg:use href="#openmojiRedExclamationMark0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36.093" cy="58.842" r="3"></svg:circle><svg:use href="#openmojiRedExclamationMark0"></svg:use></svg:g>`,
})
export class OpenmojiRedExclamationMarkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
