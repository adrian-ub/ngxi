import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCraneOffIcon],svg[tabler-crane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21h6m-3 0V9m0-4V3L8 4M6 6L3 9h6m4 0h8M9 3l10 6m-2 0v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18"></svg:path>`,
})
export class TablerCraneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
