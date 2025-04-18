import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfBuildingIcon],svg[wpf-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C4.355 0 3 1.355 3 3v23h20V3c0-1.645-1.355-3-3-3zm0 2h14c.555 0 1 .445 1 1v21h-2v-5h-5v5H5V3c0-.555.445-1 1-1m1 2v3h5V4zm7 0v3h5V4zM7 9v3h5V9zm7 0v3h5V9zm-7 5v3h5v-3zm7 0v3h5v-3zm-7 5v3h5v-3z"></svg:path>`,
})
export class WpfBuildingIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
