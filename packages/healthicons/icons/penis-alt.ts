import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltIcon],svg[healthicons-penis-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h13v-6.17A3 3 0 0 1 21 33v-4a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1v-4h2v10a1 1 0 1 0 2 0V23h2v4a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3v4a3 3 0 0 1-2 2.83V42h13s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPenisAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
