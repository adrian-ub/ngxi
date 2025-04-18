import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCastIcon],svg[memory-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H2v-3h2v1h1m3 2H6v-3H5v-1H2v-2h3v1h2v2h1m3 3H9v-4H8v-2H6v-1H2v-2h4v1h2v1h1v1h1v2h1m8 4h-6v-2h5V5H4v3H2V4h1V3h16v1h1v14h-1Z"></svg:path>`,
})
export class MemoryCastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
