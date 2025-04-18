import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiComputerKeyboardIcon],svg[openmoji-computer-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M4 24h64v24H4z"></svg:path><svg:path fill="#D0CFCE" d="M59 24h9v24H32z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M4 24h64v24H4z"></svg:path><svg:path d="M41 44H9c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h32c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1z" fill="#000"></svg:path><svg:path d="M63 44h-8c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1z" fill="#000"></svg:path><svg:path d="M49.3 40.3v-.7c0-.6-.4-1-1-1h-.7c-.6 0-1 .4-1 1v.7c0 .6-.4 1-1 1H45c-.6 0-1 .4-1 1v.7c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-.7c0-.6-.4-1-1-1h-.7c-.5 0-1-.4-1-1z" fill="#000"></svg:path><svg:path d="M51 34h-6c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1z" fill="#000"></svg:path><svg:g fill="#3F3F3F"><svg:path d="M41 44H9c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h32c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1z"></svg:path><svg:path d="M63 44h-8c-.6 0-1-.4-1-1V29c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1z"></svg:path><svg:path d="M49.3 40.3v-.7c0-.6-.4-1-1-1h-.7c-.6 0-1 .4-1 1v.7c0 .6-.4 1-1 1H45c-.6 0-1 .4-1 1v.7c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-.7c0-.6-.4-1-1-1h-.7c-.5 0-1-.4-1-1z"></svg:path><svg:path d="M51 34h-6c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1z"></svg:path></svg:g>`,
})
export class OpenmojiComputerKeyboardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
