import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCellSignal5Icon],svg[tabler-cell-signal-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20H4.731a.731.731 0 0 1-.517-1.249L18.751 4.214A.731.731 0 0 1 20 4.731zM16 7v13m-4 0v-9m-4 9v-5"></svg:path>`,
})
export class TablerCellSignal5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
