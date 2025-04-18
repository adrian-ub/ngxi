import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAptoideIcon],svg[arcticons-aptoide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.54L5.82 6.6a.84.84 0 0 0-1.32.69V24.7a4.57 4.57 0 0 0 1.7 3.57l15.16 12.34a4.16 4.16 0 0 0 5.28 0L41.8 28.27a4.57 4.57 0 0 0 1.7-3.57V7.29a.84.84 0 0 0-1.32-.69ZM8.78 30.37L24 19.54"></svg:path>`,
})
export class ArcticonsAptoideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
