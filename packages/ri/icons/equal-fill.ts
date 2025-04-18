import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualFillIcon],svg[ri-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8H5v2h14zm0 6H5v2h14z"></svg:path>`,
})
export class RiEqualFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
