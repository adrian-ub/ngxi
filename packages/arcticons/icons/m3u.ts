import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsM3uIcon],svg[arcticons-m3u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.678 11.278C41.247 9 40.003 7.22 38.412 6.606c-2.146-1.177-22.878-1.76-28.9.038c-1.592.615-2.835 2.393-3.266 4.671c-.962 6.062-1.036 19.187.028 25.397c.43 2.277 1.674 4.056 3.265 4.671c4.237 1.39 24.396 1.585 28.892 0c1.594-.61 2.842-2.39 3.275-4.671c1.026-6.618 1.1-18.918-.028-25.434"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.654 24.005L19.346 17.5v13z"></svg:path>`,
})
export class ArcticonsM3uIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
