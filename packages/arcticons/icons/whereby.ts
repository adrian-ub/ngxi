import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWherebyIcon],svg[arcticons-whereby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.59c3.08 0 3.82 6.17 4.62 8.68s6.8 24.58 6.8 24.58S30 17.17 31.54 14.69c2.62-4.11 7.28-7.1 10.12-4.94s2.38 8.3-1.3 15.1c-1.93 3.57-9.14 16-9.14 16L20.45 7.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.59h16a4.34 4.34 0 0 0 2.05-.44"></svg:path>`,
})
export class ArcticonsWherebyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
