import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerApiOffIcon],svg[tabler-api-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h5m3 3v-4m0-4h3a2 2 0 0 1 2 2v1c0 .554-.225 1.055-.589 1.417M13 13h-1m8-5v8M9 16v-5.5a2.5 2.5 0 0 0-5 0V16M3 3l18 18"></svg:path>`,
})
export class TablerApiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
