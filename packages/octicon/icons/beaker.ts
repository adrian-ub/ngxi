import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBeakerIcon],svg[octicon-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z" fill="currentColor"></svg:path>`,
})
export class OcticonBeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
