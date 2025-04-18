import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStarkeverbenIcon],svg[arcticons-starkeverben-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 25.82H24a2.54 2.54 0 1 1 0-5.08h9.5c1.41 0-.39 1.14-.39 2.54s1.8 2.54.39 2.54"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.32a8 8 0 1 0 0 15.93h0a7.13 7.13 0 1 1 0 14.25h0a21.49 21.49 0 1 1 13.52-4.78"></svg:path>`,
})
export class ArcticonsStarkeverbenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
