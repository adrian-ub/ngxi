import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAardIcon],svg[arcticons-aard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 10.35h-31a4 4 0 0 0-4 4v19.3a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4v-19.3a4 4 0 0 0-4-4M9.38 15.57h12.26M9.38 21.24h12.26M9.38 26.92h12.26m0 5.68H9.38m16.98-17.03h12.27m-12.27 5.67h12.27m-12.27 5.68h12.27m0 5.68H26.36"></svg:path>`,
})
export class ArcticonsAardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
