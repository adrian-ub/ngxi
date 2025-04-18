import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapSimpleDestinationLineIcon],svg[majesticons-map-simple-destination-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4L3 8v12l6-3l6 3l6-4V4l-6 3zm5 6.002l2 2m2 2l-2-2m0 0l2-2m-2 2l-2 2"></svg:path>`,
})
export class MajesticonsMapSimpleDestinationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
