import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileNavigationIcon],svg[tdesign-mobile-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm2 2v18h12V3zm6 1.764l4.946 9.892L12 13.11l-4.946 1.546zm-1.054 6.58l1.054-.33l1.054.33L12 9.236zM11 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
