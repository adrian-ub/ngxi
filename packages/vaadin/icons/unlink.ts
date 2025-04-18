import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinUnlinkIcon],svg[vaadin-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h1v4H8zm0 12h1v4H8zM7 9H3a1 1 0 0 1 0-2h4V5H3a3 3 0 1 0 0 6h4zm6-4H9v2h4a1 1 0 0 1 0 2H9v2h4a3 3 0 1 0 0-6M4.51 15.44L7 12H5.77l-2.08 2.88zm7.98 0L10 12h1.23l2.08 2.88zm0-14.45L10 4h1.23l2.08-2.66zm-7.98 0L7 4H5.77L3.69 1.34z"></svg:path>`,
})
export class VaadinUnlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
