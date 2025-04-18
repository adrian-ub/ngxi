import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedmoonIcon],svg[arcticons-redmoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.51 21.51 0 0 0 2.5 24a22 22 0 0 0 .65 5.17l5.6-5.34l-1.08-5.73l6.6 1.73l5.83-3l3.35.86l12-5.08l-.54 5.95l-7 6.16l5.73-1.62L35 26l-12.3 9.72l-1 6L19.25 45A21.49 21.49 0 1 0 24 2.5"></svg:path>`,
})
export class ArcticonsRedmoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
