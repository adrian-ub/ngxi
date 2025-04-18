import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatPhoneIcon],svg[topcoat-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.5 6.65c0-2.589-.561-3.15-3-3.15h-17c-2.47 0-3 .529-3 3.15V36.5c0 2.439.56 3 3 3h17c2.5 0 3-.561 3-3zm-18 1.85h13v24h-13zm8 28h-3v-2h3z"></svg:path>`,
})
export class TopcoatPhoneIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
