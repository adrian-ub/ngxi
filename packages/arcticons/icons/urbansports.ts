import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrbansportsIcon],svg[arcticons-urbansports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25 4.5H10.8v25.8c0 7.3 5.9 13.2 13.2 13.2s13.2-5.9 13.2-13.2V17.7m0-5.3V4.5h-7.6"></svg:path>`,
})
export class ArcticonsUrbansportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
