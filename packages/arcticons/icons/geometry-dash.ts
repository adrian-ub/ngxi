import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometryDashIcon],svg[arcticons-geometry-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.471 23.994l20.5-20.5l20.498 20.5L23.97 44.493z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.07 30.91l13.853-13.852l3.323 3.324l-13.852 13.852zm-4.73-8.466l3.429-3.43l3.429 3.43l-3.43 3.429zm6.687-6.684l3.43-3.43l3.429 3.43l-3.43 3.43z"></svg:path>`,
})
export class ArcticonsGeometryDashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
