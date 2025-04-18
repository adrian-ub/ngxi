import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBellIcon],svg[twemoji-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFAC33" d="M28 13c0 11 5 10 5 15c0 0 0 2-2 2H5c-2 0-2-2-2-2c0-5 5-4 5-15C8 7.478 12.477 3 18 3s10 4.478 10 10"></svg:path><svg:circle cx="18" cy="3" r="3" fill="#FFAC33"></svg:circle><svg:path fill="#FFAC33" d="M18 36a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4"></svg:path>`,
})
export class TwemojiBellIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
