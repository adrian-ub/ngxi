import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKahootIcon],svg[arcticons-kahoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.16 5.928v36.13m19.42 0L11.676 23.993L26.58 5.928M11.676 23.993H7.16M29.898 5.5L40.84 7.561l-4.3 26.872zm4.301 31.02l3.588-.051l1.323 3.919l-3.283 2.112l-3.232-2.341z"></svg:path>`,
})
export class ArcticonsKahootIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
