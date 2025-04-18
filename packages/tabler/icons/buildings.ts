import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingsIcon],svg[tabler-buildings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21V6c0-1 1-2 2-2h5c1 0 2 1 2 2v15m3-13h2c1 0 2 1 2 2v11M3 21h18m-4-5"></svg:path>`,
})
export class TablerBuildingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
