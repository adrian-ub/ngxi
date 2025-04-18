import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPackageIcon],svg[vaadin-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 2v10l8 4l8-4V2zm0 1l2.1.5l-5.9 1.9l-2.3-.8zm0 13.9l-7-3.5V3.3l3 1v3.4L5 8V4.7l3 1zm.5-10.1l-2.7-.9L12 2l2.4.6z"></svg:path>`,
})
export class VaadinPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
