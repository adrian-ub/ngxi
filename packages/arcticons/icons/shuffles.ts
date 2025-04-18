import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShufflesIcon],svg[arcticons-shuffles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.39 5.5L6.229 9.362l1.078 9.252V29.34h19.356L7.338 31.59L8.61 42.5l33.161-3.862l-1.08-9.298l.002-10.984H23.947l16.714-1.947z"></svg:path>`,
})
export class ArcticonsShufflesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
