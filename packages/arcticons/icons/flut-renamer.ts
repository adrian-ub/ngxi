import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlutRenamerIcon],svg[arcticons-flut-renamer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.545 41.847L5.5 16.73l37 .044l-2.294 25.236zm.519-25.619l-.149-2.761l11.854-.05l1.578 1.604l16.82-.172l1.578 1.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.168 14.849l-.141-3.064L33.56 5.99H13.742l-5.827 7.477m4.726 10.647l23.023.183l-.215 11.7l-22.67-.056zM24.506 22l3.5-.01m-3.569 15.744l3.5-.01m-1.748-15.615l.099 15.72m10.977-27.033H9.997M35.49 8.494h-23.7"></svg:path>`,
})
export class ArcticonsFlutRenamerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
