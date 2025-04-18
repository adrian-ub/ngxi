import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHomeCheckIcon],svg[ci-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l2.8 2.9l-1.43 1.402L10.5 6.88L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm-1.712-4l-2.706-2.7L13 11.882l1.292 1.291l4.3-4.292L20 10.298l-5.712 5.7V16Z"></svg:path>`,
})
export class CiHomeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
