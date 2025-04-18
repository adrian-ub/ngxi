import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerContractIcon],svg[tabler-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 21H6a3 3 0 0 1-3-3v-1h5.5M17 8.5V5a2 2 0 1 1 2 2h-2"></svg:path><svg:path d="M19 3H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4m5.42 1.61a2.1 2.1 0 0 1 2.97 2.97L15 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerContractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
