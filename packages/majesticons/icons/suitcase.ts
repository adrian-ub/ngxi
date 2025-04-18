import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSuitcaseIcon],svg[majesticons-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-3V6a3 3 0 0 0-3-3zm3 4h-4V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
