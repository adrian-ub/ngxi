import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndeedIcon],svg[arcticons-indeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.758 27.267V40.53c0 3.958 6.964 3.96 6.964 0V27.267a7.72 7.72 0 0 1-6.964 0"></svg:path><svg:ellipse cx="26.468" cy="16.146" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.17" ry="4.139"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.518 22.771c2.33-9.728 11.661-25.061 26.964-14.96"></svg:path>`,
})
export class ArcticonsIndeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
