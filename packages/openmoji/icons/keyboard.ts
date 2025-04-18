import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeyboardIcon],svg[openmoji-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiKeyboard0" d="M41 44H9c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h32c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1m22 0h-8c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1m-13.7-3.7v-.7c0-.6-.4-1-1-1h-.7c-.6 0-1 .4-1 1v.7c0 .6-.4 1-1 1H45c-.6 0-1 .4-1 1v.7c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-.7c0-.6-.4-1-1-1h-.7c-.5 0-1-.4-1-1M51 34h-6c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1"></svg:path></svg:defs><svg:path fill="#FFF" d="M4 24h64v24H4z"></svg:path><svg:path fill="#D0CFCE" d="M59 24h9v24H32z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M4 24h64v24H4z"></svg:path><svg:use href="#openmojiKeyboard0"></svg:use><svg:use href="#openmojiKeyboard0" fill="#3F3F3F"></svg:use>`,
})
export class OpenmojiKeyboardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
