import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWikipediaIcon],svg[arcticons-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.07h7.3m4.99 0h5.52m21.19 0h-6.58m-4.84 0h-4.83m-7.7 0l10.53 25.86l10.11-25.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.67 11.07L18.23 36.93L8.15 11.07"></svg:path>`,
})
export class ArcticonsWikipediaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
