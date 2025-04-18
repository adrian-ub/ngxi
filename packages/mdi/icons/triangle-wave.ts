import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleWaveIcon],svg[mdi-triangle-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-5 10L7.1 6.04L4.24 12H2L7 2l9.9 15.96L19.76 12z"></svg:path>`,
})
export class MdiTriangleWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
