import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMapSignsIcon],svg[la-map-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v2H5v9h20.469l.281-.344l3.563-4.156l-3.563-4.156L25.469 7H17V5zM7 9h17.531l2.157 2.5L24.53 14H7zm8 8v10h2V17z"></svg:path>`,
})
export class LaMapSignsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
