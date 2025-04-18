import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMobileMessageIcon],svg[openmoji-mobile-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="34.043" height="55.942" x="15.177" y="7.992" fill="#9b9b9a" rx="3.68" ry="3.68"></svg:rect><svg:path fill="#3f3f3f" d="M45.388 55.01h-26.38a.975.975 0 0 1-.972-.973V15.13a.975.975 0 0 1 .973-.973h26.38a.975.975 0 0 1 .972.973v38.907a.92.92 0 0 1-.973.972"></svg:path><svg:path fill="#fcea2b" d="M31.137 22.073a3.69 3.69 0 0 0-3.68 3.68V40.75a.31.31 0 0 0 .46.276l4.6-4.048a.68.68 0 0 1 .552-.184h25.484a3.69 3.69 0 0 0 3.68-3.68v-7.36a3.69 3.69 0 0 0-3.68-3.68Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46.36 39.548v14.489a.92.92 0 0 1-.972.972h-26.38a.975.975 0 0 1-.972-.972V15.13a.975.975 0 0 1 .973-.973h26.38a.975.975 0 0 1 .972.973v3.902"></svg:path><svg:circle cx="32.198" cy="59.266" r="1.945"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.335 11.24h9.727zM49.22 39.548v20.706a3.69 3.69 0 0 1-3.68 3.68H18.857a3.69 3.69 0 0 1-3.68-3.68V11.672a3.69 3.69 0 0 1 3.68-3.68H45.54a3.69 3.69 0 0 1 3.68 3.68v7.36"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M31.137 22.073a3.69 3.69 0 0 0-3.68 3.68V40.75a.31.31 0 0 0 .46.276l4.6-4.048a.68.68 0 0 1 .552-.184h25.484a3.69 3.69 0 0 0 3.68-3.68v-7.36a3.69 3.69 0 0 0-3.68-3.68Z"></svg:path>`,
})
export class OpenmojiMobileMessageIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
