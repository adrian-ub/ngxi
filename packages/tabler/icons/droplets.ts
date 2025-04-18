import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletsIcon],svg[tabler-droplets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.072 20.3a3 3 0 0 0 3.856 0a3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L3.4 16.502a3 3 0 0 0 .671 3.798zm12 0a3 3 0 0 0 3.856 0a3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L15.4 16.502a3 3 0 0 0 .671 3.798zm-6-10a3 3 0 0 0 3.856 0a3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L9.4 6.502a3 3 0 0 0 .671 3.798z"></svg:path>`,
})
export class TablerDropletsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
