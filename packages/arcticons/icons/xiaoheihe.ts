import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXiaoheiheIcon],svg[arcticons-xiaoheihe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.571 10.56L6.57 14.557v18.897L23.999 43.5V31.08m10.43 6.36l7.002-3.996V14.547L24.001 4.5v12.42"></svg:path>`,
})
export class ArcticonsXiaoheiheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
