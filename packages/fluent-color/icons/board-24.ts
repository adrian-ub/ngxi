import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBoard24Icon],svg[fluent-color-board-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBoard240)" d="m11.999 15l4.501-1l4.5 1v2.752a3.25 3.25 0 0 1-3.25 3.25H12L11 18z"></svg:path><svg:path fill="url(#fluentColorBoard241)" d="M17.751 3a3.25 3.25 0 0 1 3.245 3.066l.005.184L21 15h-9l-1-6l1.001-6z"></svg:path><svg:path fill="url(#fluentColorBoard242)" d="M11.999 9L12 21.001H6.25a3.25 3.25 0 0 1-3.245-3.065L3 17.752V9l4.5-1z"></svg:path><svg:path fill="url(#fluentColorBoard243)" d="M12.001 3L12 9H3V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBoard240" x1="7.666" x2="12.721" y1="11.454" y2="23.563" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#52D17C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard241" x1="13" x2="20.103" y1="4.333" y2="13.322" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard242" x1="4.286" x2="11.748" y1="10.053" y2="17.199" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard243" x1="4.286" x2="6.65" y1="4.2" y2="10.322" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#64DE89"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBoard24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
