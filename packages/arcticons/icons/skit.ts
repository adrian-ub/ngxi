import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkitIcon],svg[arcticons-skit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.446 31.565L37.853 19.54L42.5 29.737L16.093 41.762zM5.5 18.263L31.896 6.238l4.646 10.197L10.147 28.46zm25.041 1.156h7.004M10.29 28.504l6.607.407m14.945-1.753h6.189m-3.094-3.1v6.2"></svg:path>`,
})
export class ArcticonsSkitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
