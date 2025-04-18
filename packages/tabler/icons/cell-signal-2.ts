import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCellSignal2Icon],svg[tabler-cell-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20H4.731a.731.731 0 0 1-.517-1.249L18.751 4.214A.731.731 0 0 1 20 4.731zM8 20v-5"></svg:path>`,
})
export class TablerCellSignal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
