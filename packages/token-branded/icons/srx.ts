import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSrxIcon],svg[token-branded-srx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#A62222" d="M8 9.75v-4.5L4 7.5z"></svg:path><svg:path fill="#EE8622" d="M8 14.25v-4.5L4 12z"></svg:path><svg:path fill="#A62222" d="M8 18.75v-4.5L4 16.5z"></svg:path><svg:path fill="#E23C25" d="M20 16.5V12l-4 2.25zm-4-2.25v-4.5L12 12zm0 4.5v-4.5l-4 2.25z"></svg:path><svg:path fill="#EE8622" d="M12 21v-4.5l-4 2.25z"></svg:path><svg:path fill="#FAC211" d="M20 12V7.5l-4 2.25z"></svg:path><svg:path fill="#EE8622" d="M12 7.5V3L8 5.25z"></svg:path><svg:path fill="#E23C25" d="M8 9.75v-4.5l4 2.25z"></svg:path><svg:path fill="#FAC211" d="M8 14.25v-4.5L12 12zM12 21v-4.5l4 2.25z"></svg:path><svg:path fill="#E23C25" d="M4 12V7.5l4 2.25zm0 4.5V12l4 2.25z"></svg:path><svg:path fill="#FAC211" d="M12 7.5V3l4 2.25z"></svg:path><svg:path fill="#EE8622" d="M16 9.75v-4.5l4 2.25zm0 4.5v-4.5L20 12z"></svg:path><svg:path fill="#A62222" d="M16 18.75v-4.5l4 2.25z"></svg:path></svg:g>`,
})
export class TokenBrandedSrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
