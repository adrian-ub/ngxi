import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSrxIcon],svg[token-srx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9.75v-4.5L4 7.5zm0 4.5v-4.5L4 12zm0 4.5v-4.5L4 16.5zm12-2.25V12l-4 2.25zm-4-2.25v-4.5L12 12zm0 4.5v-4.5l-4 2.25zM12 21v-4.5l-4 2.25zm8-9V7.5l-4 2.25zm-8-4.5V3L8 5.25z"></svg:path><svg:path fill="currentColor" d="M8 9.75v-4.5l4 2.25zm0 4.5v-4.5L12 12zM12 21v-4.5l4 2.25zm-8-9V7.5l4 2.25zm0 4.5V12l4 2.25zm8-9V3l4 2.25zm4 2.25v-4.5l4 2.25zm0 4.5v-4.5L20 12zm0 4.5v-4.5l4 2.25z"></svg:path>`,
})
export class TokenSrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
