import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsPhoneIncomingIcon],svg[humbleicons-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 4l-5.5 5.5m0 0v-4m0 4h4M8 5l-2.485.621c-.89.223-1.534 1.029-1.352 1.928c1.06 5.213 7.075 11.228 12.288 12.287c.9.183 1.705-.46 1.928-1.35l.62-2.486l-3.5-2l-1.5 1.5c-2-1-4.5-3.5-5.5-5.5L10 8.5z"></svg:path>`,
})
export class HumbleiconsPhoneIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
