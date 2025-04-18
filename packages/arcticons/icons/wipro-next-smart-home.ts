import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWiproNextSmartHomeIcon],svg[arcticons-wipro-next-smart-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.923 21.55l-1.7 5.4l-1.6-5.4l-1.6 5.4l-1.7-5.4m23.354 5.4c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v1.3c0 1.1-.9 2-2 2m-5.754-3.4c0-1.1.9-2 2-2m-2 0v5.4"></svg:path><svg:circle cx="20.323" cy="19.15" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.323 21.55v5.4m2.4-2c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2v-1.3c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2m0-2.1v8"></svg:path>`,
})
export class ArcticonsWiproNextSmartHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
