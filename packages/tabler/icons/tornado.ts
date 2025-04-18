import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTornadoIcon],svg[tabler-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 4H3m10 12H7m4 4h4M6 8h14M4 12h12"></svg:path>`,
})
export class TablerTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
