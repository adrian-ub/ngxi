import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashOffIcon],svg[tabler-cash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"></svg:path><svg:path d="M12.582 12.59a2 2 0 0 0 2.83 2.826M17 9V7a2 2 0 0 0-2-2H9M5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
