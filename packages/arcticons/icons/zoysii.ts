import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZoysiiIcon],svg[arcticons-zoysii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4l18.67 14.81L24 33.62L5.33 18.81Zm12.13 20l6.54 5.19L24 44L5.33 29.19L11.87 24"></svg:path>`,
})
export class ArcticonsZoysiiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
