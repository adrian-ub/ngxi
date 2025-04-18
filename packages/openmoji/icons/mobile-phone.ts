import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMobilePhoneIcon],svg[openmoji-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#9B9B9A" d="M52.5 64.764h-33a1 1 0 0 1-1-1v-56a1 1 0 0 1 1-1h33a1 1 0 0 1 1 1v56a1 1 0 0 1-1 1"></svg:path><svg:path fill="#D0CFCE" d="M48.034 55H23.966a.966.966 0 0 1-.966-.966V13.966c0-.534.433-.966.966-.966h24.068c.534 0 .966.432.966.966v40.068a.966.966 0 0 1-.966.966"></svg:path><svg:path fill="#FFF" d="M31 10h10z"></svg:path></svg:g><svg:g stroke="#000" stroke-miterlimit="10"><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M52.5 64.764h-33a1 1 0 0 1-1-1v-56a1 1 0 0 1 1-1h33a1 1 0 0 1 1 1v56a1 1 0 0 1-1 1"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M48.034 55H23.966a.966.966 0 0 1-.966-.966V13.966c0-.534.433-.966.966-.966h24.068c.534 0 .966.432.966.966v40.068a.966.966 0 0 1-.966.966"></svg:path><svg:circle cx="36" cy="60" r="2"></svg:circle><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31 10h10z"></svg:path></svg:g>`,
})
export class OpenmojiMobilePhoneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
