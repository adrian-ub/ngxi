import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaBadIcon],svg[iwwa-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 38.5C9.799 38.5 1.5 30.201 1.5 20S9.799 1.5 20 1.5S38.5 9.799 38.5 20S30.201 38.5 20 38.5m0-36C10.351 2.5 2.5 10.351 2.5 20S10.351 37.5 20 37.5S37.5 29.649 37.5 20S29.649 2.5 20 2.5"></svg:path><svg:path fill="currentColor" d="m11.477 29.011l-.851-.525a10.98 10.98 0 0 1 9.389-5.235c3.824 0 7.321 1.937 9.355 5.18l-.847.531a9.99 9.99 0 0 0-8.508-4.711a9.98 9.98 0 0 0-8.538 4.76"></svg:path><svg:circle cx="14.666" cy="15.309" r="1" fill="currentColor"></svg:circle><svg:circle cx="25.333" cy="15.309" r="1" fill="currentColor"></svg:circle>`,
})
export class IwwaBadIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
