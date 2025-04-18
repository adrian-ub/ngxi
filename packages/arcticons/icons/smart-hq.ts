import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartHqIcon],svg[arcticons-smart-hq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.283 39.418a6.283 6.283 0 0 0-12.566 0H7.67V18.067L24 5.5l16.329 12.567v21.351z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.183 28.112c8.794-8.795 18.84-8.795 27.634 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.955 33.135c6.273-6.283 13.817-6.283 20.09 0M24 36.337c1.7 0 3.082 1.38 3.082 3.081S25.7 42.5 24 42.5s-3.082-1.38-3.082-3.082S22.3 36.337 24 36.337"></svg:path>`,
})
export class ArcticonsSmartHqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
