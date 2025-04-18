import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSearchIcon],svg[tdesign-system-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v11h-2V3H3v13h9v2H1zm17.25 14a2.75 2.75 0 0 1 1.947 4.693l-.01.008A2.75 2.75 0 1 1 18.25 15m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412zM2.25 21H12v2H2.25z"></svg:path>`,
})
export class TdesignSystemSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
