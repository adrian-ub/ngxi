import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBoard28Icon],svg[fluent-color-board-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBoard280)" d="m25 18l-5.5-1l-5.5 1l-1 3.5l1 3.5h7.25A3.75 3.75 0 0 0 25 21.25z"></svg:path><svg:path fill="url(#fluentColorBoard281)" d="m14 3l-1 7.5l1 7.5h11V6.75A3.75 3.75 0 0 0 21.25 3z"></svg:path><svg:path fill="url(#fluentColorBoard282)" d="M14 25V11l-5.5-1L3 11v10.25A3.75 3.75 0 0 0 6.75 25z"></svg:path><svg:path fill="url(#fluentColorBoard283)" d="M14 3v8H3V6.75A3.75 3.75 0 0 1 6.75 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBoard280" x1="9" x2="14.577" y1="14.091" y2="28.121" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#52D17C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard281" x1="15.4" x2="24.356" y1="4.667" y2="15.546" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard282" x1="4.571" x2="13.187" y1="12.368" y2="21.109" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard283" x1="4.571" x2="7.927" y1="4.6" y2="12.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#64DE89"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBoard28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
