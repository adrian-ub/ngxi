import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSquircleIdeIcon],svg[arcticons-squircle-ide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.861 17.639L3.5 24L24 44.5l6.361-6.361m7.778-7.778L44.5 24L24 3.5l-6.361 6.361"></svg:path>`,
})
export class ArcticonsSquircleIdeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
