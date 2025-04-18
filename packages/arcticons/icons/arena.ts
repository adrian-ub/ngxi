import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArenaIcon],svg[arcticons-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.07c-3.44-4.52-9.75-9-9.75-9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.18 41.2A76.4 76.4 0 0 0 43.5 30.52S28.72 20.58 24 6.8C19.28 20.58 4.5 30.52 4.5 30.52A76.4 76.4 0 0 0 17.82 41.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.07c3.44-4.52 9.75-9 9.75-9"></svg:path>`,
})
export class ArcticonsArenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
