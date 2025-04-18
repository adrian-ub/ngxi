import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheVergeIcon],svg[arcticons-the-verge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 7.202h-7.17L21.605 40.798h7.17zM22.378 30.965L15.23 13.454h9.45V7.207H5.5l9.718 23.758z"></svg:path>`,
})
export class ArcticonsTheVergeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
