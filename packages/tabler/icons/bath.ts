import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBathIcon],svg[tabler-bath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1m2 0V5a2 2 0 0 1 2-2h3v2.25M4 21l1-1.5M20 21l-1-1.5"></svg:path>`,
})
export class TablerBathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
