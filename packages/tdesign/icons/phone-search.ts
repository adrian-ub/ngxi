import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneSearchIcon],svg[tdesign-phone-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v10h-2V3H6v18h6.5v2H4zm13.25 13.5a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignPhoneSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
