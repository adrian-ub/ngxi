import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagGreenlandIcon],svg[twemoji-flag-for-flag-greenland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D00C33" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z"></svg:path><svg:path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"></svg:path><svg:circle fill="#EEE" cx="13.5" cy="18" r="8"></svg:circle><svg:path fill="#D00C33" d="M13.5 10a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"></svg:path>`,
})
export class TwemojiFlagForFlagGreenlandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
