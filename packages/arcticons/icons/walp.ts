import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalpIcon],svg[arcticons-walp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 20.623l7.8 13.51l11.7-20.266H30.23C34.892 19.014 32.58 24.41 25.95 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.35 24c6.631.41 8.942-4.987 4.28-10.132H27.9L16.2 34.133L4.5 13.867h7.8"></svg:path>`,
})
export class ArcticonsWalpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
