import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnagIcon],svg[arcticons-anag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.094 22.36l.083 19.898l1.256 1.242h3.32l1.535-1.242V28.72l9.7 14.298h4.952l.967-1.327V22.36H28.69v10.37l-6.636-10.37z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.556 15.55a1.53 1.53 0 1 1 0-3.06a1.53 1.53 0 0 1 0 3.06m8.905 0a1.53 1.53 0 1 1 1.53-1.53h0a1.53 1.53 0 0 1-1.53 1.53"></svg:path><svg:path d="M24 6.13c6.024 0 10.907 4.883 10.907 10.907v1.556H13.094v-1.556C13.094 11.013 17.977 6.13 24 6.13M14.582 4.5l3.098 3.647M33.418 4.5L30.32 8.147"></svg:path></svg:g>`,
})
export class ArcticonsAnagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
