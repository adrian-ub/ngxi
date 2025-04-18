import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirtelXstreamIcon],svg[arcticons-airtel-xstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.112 42.5h-5.725L19.87 27.985l-5.71 5.708H8.585l8.563-8.562L5.71 13.695h5.766l8.542 8.54L36.756 5.5h5.534L22.695 25.093Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.017 22.189l2.968 2.968l-3.08 3.08l-3.036-3.036Z"></svg:path>`,
})
export class ArcticonsAirtelXstreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
