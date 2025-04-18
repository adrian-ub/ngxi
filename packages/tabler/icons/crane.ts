import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCraneIcon],svg[tabler-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 21h6m-3 0V3L3 9h18M9 3l10 6"></svg:path><svg:path d="M17 9v4a2 2 0 1 1-2 2"></svg:path></svg:g>`,
})
export class TablerCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
