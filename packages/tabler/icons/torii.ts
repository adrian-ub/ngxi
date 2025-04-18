import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToriiIcon],svg[tabler-torii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4q8 2 16 0M4 8h16m-8-3v3m6-3.5V20M6 4.5V20"></svg:path>`,
})
export class TablerToriiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
