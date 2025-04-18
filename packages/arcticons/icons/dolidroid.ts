import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDolidroidIcon],svg[arcticons-dolidroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.016 31.535h5.495a7.534 7.534 0 0 0 0-15.07h-5.495z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.51 5.5H5.99v37h17.52c10.218 0 18.5-8.283 18.5-18.5S33.729 5.5 23.51 5.5m-5.494 26.035V42.5"></svg:path>`,
})
export class ArcticonsDolidroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
