import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTelephoneReceiverIcon],svg[openmoji-telephone-receiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiTelephoneReceiver0" d="M13.67 21.31c1.415 9.9 26.87 35.355 36.77 36.77c0 0 5.657 0 8.486-5.658l-9.193-9.192l-3.535 3.536c-7.071-1.415-19.8-14.143-21.214-21.214l3.536-3.535l-9.192-9.193c-5.657 2.829-5.657 8.486-5.657 8.486"></svg:path></svg:defs><svg:path fill="#d0cfce" d="M13.67 21.31c1.415 9.9 26.87 35.355 36.77 36.77c0 0 5.657 0 8.486-5.658l-9.193-9.192l-3.535 3.536c-7.071-1.415-19.8-14.143-21.214-21.214l3.536-3.535l-9.192-9.193c-5.657 2.829-5.657 8.486-5.657 8.486"></svg:path><svg:path fill="#9b9b9a" d="m25 26l-9.084-8.96l2.083-2.728a1.015 1.015 0 0 1 1.499-.127l8.252 7.69zm29.893 29.907l-8.441-8.334l3.228-3.251l8.519 8.485z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiTelephoneReceiver0"></svg:use><svg:use href="#openmojiTelephoneReceiver0"></svg:use></svg:g>`,
})
export class OpenmojiTelephoneReceiverIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
