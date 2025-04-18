import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagNigerIcon],svg[twemoji-flag-for-flag-niger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 13h36v10H0z"></svg:path><svg:path fill="#E05206" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></svg:path><svg:circle fill="#E05206" cx="18" cy="18" r="4"></svg:circle><svg:path fill="#0DB02B" d="M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4z"></svg:path>`,
})
export class TwemojiFlagForFlagNigerIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
