import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMicroscopeOffIcon],svg[tabler-microscope-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h14M6 18h2m-1 0v3m3-11l-1 1l3 3l1-1m2-2l3-3l-3-3l-3 3m-1.5 4.5L9 14m8-11l3 3m-8 15a6 6 0 0 0 5.457-3.505m.441-3.599a6 6 0 0 0-2.183-3.608M3 3l18 18"></svg:path>`,
})
export class TablerMicroscopeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
