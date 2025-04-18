import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferDownIcon],svg[iconoir-data-transfer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20v-1m0-4v-1M7 4v16m0 0l-3-3m3 3l3-3m7-7V4m0 0l-3 3m3-3l3 3"></svg:path>`,
})
export class IconoirDataTransferDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
