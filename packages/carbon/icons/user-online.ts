import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUserOnlineIcon],svg[carbon-user-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="16" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserOnlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
