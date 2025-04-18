import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionEuroIcon],svg[tabler-transaction-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.8c-.523-.502-1.172-.8-1.875-.8C17.398 12 16 13.791 16 16s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M15 16h4M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
