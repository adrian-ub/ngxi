import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWrongPinShutdownIcon],svg[arcticons-wrong-pin-shutdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="10.849" x="4.5" y="29.262" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.935"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.407 38.05v-6.727M21.154 9.57a7.812 7.812 0 1 0 5.692 0M24 7.889v7.865"></svg:path><svg:circle cx="10.355" cy="34.687" r="1.682" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="34.687" r="1.682" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.177" cy="34.687" r="1.682" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsWrongPinShutdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
