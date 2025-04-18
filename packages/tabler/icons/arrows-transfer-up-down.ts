import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsTransferUpDownIcon],svg[tabler-arrows-transfer-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21v-6m13-9l-3-3l-3 3m-4 12l-3 3l-3-3M7 3v2m0 4v2m10-8v6m0 12v-2m0-4v-2"></svg:path>`,
})
export class TablerArrowsTransferUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
