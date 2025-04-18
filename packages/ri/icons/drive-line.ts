import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDriveLineIcon],svg[ri-drive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.097 6.15L4.31 14.443l1.755 3.032l4.785-8.289zm-1.3 12.324h9.568l1.751-3.034H9.55zm11.314-5.034l-4.786-8.29H10.83l4.787 8.29zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444zm3.485 8.036l-1.302 2.254h2.603z"></svg:path>`,
})
export class RiDriveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
