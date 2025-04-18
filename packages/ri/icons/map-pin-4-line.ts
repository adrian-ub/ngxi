import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPin4LineIcon],svg[ri-map-pin-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2zM12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m-7 6h14v2H5z"></svg:path>`,
})
export class RiMapPin4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
