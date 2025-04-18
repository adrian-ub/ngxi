import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePhoneIcon],svg[guidance-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 4.706C2 14.257 9.743 22 19.294 22L23 18.294l-4.323-4.323l-3.089 3.088l-8.647-8.647l3.088-3.088L5.706 1z"></svg:path>`,
})
export class GuidancePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
