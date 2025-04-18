import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareToggleIcon],svg[tabler-square-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20m2-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8m6 2a2 2 0 0 0-2-2m0 16a2 2 0 0 0 2-2m0-8v4"></svg:path>`,
})
export class TablerSquareToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
