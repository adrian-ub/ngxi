import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsListmyappsIcon],svg[arcticons-listmyapps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 2L3.156 29.128l3.168-.743l-3.407 3.51L2 42.5l29.642 2.562l.823-6.637l2.139 6.893L42.5 46l2.3-26.619l-3.687-4.207l4.019.366L46 5.5L18.316 3.108L16.778 6.97l-1.183-4.098Z"></svg:path><svg:circle cx="11.018" cy="12.892" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.701" cy="21.865" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.547" cy="30.846" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.308 14.78l22.341 2.317m-23.433 5.899l22.744 2.092m-23.491 6.228l22.568 1.01"></svg:path>`,
})
export class ArcticonsListmyappsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
