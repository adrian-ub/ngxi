import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVtb24Icon],svg[arcticons-vtb24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.907 20.549H6.592M42.5 8.599H15.736C11.088 12.825 7.284 16.769 5.5 24c1.784 7.231 5.588 11.175 10.236 15.401H42.5c0-5.588-8.593-13.523-8.593-13.523H11.604m27.515-11.304H9.994"></svg:path>`,
})
export class ArcticonsVtb24Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
