import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaptureOffIcon],svg[tabler-capture-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.554 0 1.055-.225 1.417-.589M9.87 9.887a3 3 0 0 0 4.255 4.23m.58-3.416a3 3 0 0 0-1.4-1.403M4 8V6c0-.548.22-1.044.577-1.405M3 3l18 18"></svg:path>`,
})
export class TablerCaptureOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
