import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPercentageIcon],svg[tabler-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0M6 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 11L18 6"></svg:path>`,
})
export class TablerPercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
