import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroIcon],svg[arcticons-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.59 40s4.51-5.36 4.86-11.67c.46-8-2.52-12.86-6.48-16.3h0a22 22 0 0 0-6.49-4L24 40L17.51 8A20.7 20.7 0 0 0 11 12c-3.94 3.46-6.94 8.36-6.49 16.3c.4 6.36 4.9 11.7 4.9 11.7"></svg:path>`,
})
export class ArcticonsMetroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
