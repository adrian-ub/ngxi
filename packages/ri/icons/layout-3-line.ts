import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout3LineIcon],svg[ri-layout-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm4-11H5v9h3zm11 0h-9v9h9zm0-5H5v3h14z"></svg:path>`,
})
export class RiLayout3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
