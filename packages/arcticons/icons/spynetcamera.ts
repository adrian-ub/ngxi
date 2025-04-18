import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpynetcameraIcon],svg[arcticons-spynetcamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="7.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="11.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.3 5.5h29.4c2.1 0 3.8 1.7 3.8 3.8v29.4c0 2.1-1.7 3.8-3.8 3.8H9.3c-2.1 0-3.8-1.7-3.8-3.8V9.3c0-2.1 1.7-3.8 3.8-3.8m33.2 14.8h-7.7m-21.7.1H5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.6 14.7v-4c0-1 .8-1.8 1.8-1.8h4.9c1 0 1.8.8 1.8 1.8v4.8c0 1-.8 1.8-1.8 1.8h-4.2"></svg:path>`,
})
export class ArcticonsSpynetcameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
