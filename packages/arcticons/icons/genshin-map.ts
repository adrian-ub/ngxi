import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGenshinMapIcon],svg[arcticons-genshin-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 15l1.474 3.984a6 6 0 0 0 3.542 3.542L33 24l-3.984 1.474a6 6 0 0 0-3.542 3.542L24 33l-1.474-3.984a6 6 0 0 0-3.542-3.542L15 24l3.984-1.474a6 6 0 0 0 3.542-3.542z"></svg:path>`,
})
export class ArcticonsGenshinMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
