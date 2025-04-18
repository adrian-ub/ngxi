import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMykyivstarIcon],svg[arcticons-mykyivstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 19.397l12.528 4.07M24 4.503v13.173m7.973 5.792l12.527-4.07M28.927 32.84l7.742 10.657M19.073 32.84l-7.742 10.657"></svg:path>`,
})
export class ArcticonsMykyivstarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
