import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAxieinfinityIcon],svg[arcticons-axieinfinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.477 21.05c-3.58-3.6-9.388-7.565-14.16-9.055a43.84 43.84 0 0 0-.276 24.01c5.832-1.702 11.895-6.215 17.962-11.708a84.8 84.8 0 0 1 17.778-12.3c2.285 6.96 2.212 16.209.256 23.807c-4.732.117-11.212-4.968-14.946-8.845m-10.273-8.373l-7.22 6.78"></svg:path>`,
})
export class ArcticonsAxieinfinityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
