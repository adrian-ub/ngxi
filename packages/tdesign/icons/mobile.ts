import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileIcon],svg[tdesign-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm2 2v18h12V3zm5 14h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
