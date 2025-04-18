import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZoomEarthIcon],svg[arcticons-zoom-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path d="M19.463 22.527C17.8 27.81 23.903 33.353 31.79 32.08c5.45-.88 12.938-7.561 11.36-17.851"></svg:path><svg:path d="M28.537 25.473c1.663-5.282-4.44-10.826-12.326-9.552c-5.428.877-12.88 7.51-11.377 17.731"></svg:path><svg:path d="M24.993 19.334c-5.131-1.163-10.308 4.807-9.072 12.455c.877 5.428 7.51 12.88 17.731 11.378"></svg:path><svg:path d="M22.527 28.537c5.282 1.663 10.826-4.44 9.552-12.326c-.877-5.428-7.51-12.88-17.731-11.377"></svg:path><svg:path d="M28.768 24a4.768 4.768 0 1 1-9.536 0a4.768 4.768 0 0 1 9.536 0"></svg:path></svg:g>`,
})
export class ArcticonsZoomEarthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
