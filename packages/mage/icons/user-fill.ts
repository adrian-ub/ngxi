import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserFillIcon],svg[mage-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.37 21.25a.75.75 0 0 1-.75.75H4.38a.75.75 0 0 1-.75-.75c0-4.1 4.5-7.28 8.37-7.28s8.37 3.18 8.37 7.28M17.1 7.11A5.1 5.1 0 1 1 12 2a5.11 5.11 0 0 1 5.1 5.11"></svg:path>`,
})
export class MageUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
