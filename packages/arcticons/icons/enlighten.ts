import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnlightenIcon],svg[arcticons-enlighten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.07 28.92C5.3 38.43 13.82 45.5 24 45.5s18.7-7.07 20.93-16.58M2.5 24h43c0-1.39-.13-2.75-.39-4.07c-.05-.29-.12-.57-.18-.85C42.7 9.57 34.18 2.5 24 2.5S5.3 9.57 3.07 19.08"></svg:path>`,
})
export class ArcticonsEnlightenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
