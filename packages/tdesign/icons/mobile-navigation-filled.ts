import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileNavigationFilledIcon],svg[tdesign-mobile-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm7 16v2.004h2.004V17zm4.973-3.172L12 5.882l-3.973 7.946L12 12.586z"></svg:path>`,
})
export class TdesignMobileNavigationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
