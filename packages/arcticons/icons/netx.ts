import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetxIcon],svg[arcticons-netx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.977 10.298l-19.43 15.259L6.762 10.405A19.4 19.4 0 0 1 13.469 5.5l11.62 15.258M9.023 37.702l19.43-15.258l12.785 15.151A19.4 19.4 0 0 1 34.53 42.5L22.91 27.242"></svg:path>`,
})
export class ArcticonsNetxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
