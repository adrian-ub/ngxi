import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoultAmpIcon],svg[arcticons-boult-amp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.295 20.41v7.181h3.591m-.144-7.181H38.5m-2.379 7.181V20.41m-12.821 0v4.802a2.379 2.379 0 1 0 4.757 0V20.41M12.462 24a1.795 1.795 0 1 1 0 3.59H9.5v-7.18h2.962a1.795 1.795 0 1 1 0 3.59m0 0H9.5m9.186 3.59a2.38 2.38 0 0 1-2.379-2.378v-2.424a2.379 2.379 0 1 1 4.758 0v2.424a2.38 2.38 0 0 1-2.379 2.379"></svg:path>`,
})
export class ArcticonsBoultAmpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
