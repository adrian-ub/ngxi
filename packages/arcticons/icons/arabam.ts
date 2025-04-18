import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArabamIcon],svg[arcticons-arabam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.969 32.358A8.358 8.358 0 1 1 31.09 18.31l.008 11.371a8.36 8.36 0 0 1-6.13 2.677z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.088 6.925H42.5v34.149H31.088l.01-1.765a17.4 17.4 0 0 1-8.22 2.068C13.28 41.377 5.5 33.597 5.5 24S13.28 6.623 22.877 6.623c2.866 0 5.687.709 8.212 2.063z"></svg:path>`,
})
export class ArcticonsArabamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
