import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAwokenIcon],svg[arcticons-awoken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.69 34.435l36.62-.084L23.966 2.6z"></svg:path><svg:ellipse cx="23.886" cy="23.751" rx="15.419" ry="15.47"></svg:ellipse></svg:g>`,
})
export class ArcticonsAwokenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
