import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShiftmanagerProIcon],svg[arcticons-shiftmanager-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.256 13.015L20.763 39.851H14.75L5.5 23.83l9.25-16.022h4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.987 23.83l9.25-16.022h6.013L42.5 23.83l-9.25 16.021h-4"></svg:path>`,
})
export class ArcticonsShiftmanagerProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
