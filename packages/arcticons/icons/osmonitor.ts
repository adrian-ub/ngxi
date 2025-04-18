import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsmonitorIcon],svg[arcticons-osmonitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.74h37a1 1 0 0 1 1 1v31.72a1 1 0 0 1-1 1h-37a1 1 0 0 1-1-1V6.74a1 1 0 0 1 1-1"></svg:path><svg:circle cx="40.27" cy="37.16" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.79" cy="37.16" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.31" cy="37.16" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.32 8.17h33.36v26.06H7.32z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.32 22.6h6.49l2.53-8.61l4.29 15.79L24 17.97l2.18 7.68L28 22.6h12.68"></svg:path>`,
})
export class ArcticonsOsmonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
