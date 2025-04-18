import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChargingPileIcon],svg[tabler-charging-pile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 7l-1 1m-3 3h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14"></svg:path><svg:path d="M9 11.5L7.5 14h3L9 16.5M3 20h12M4 8h10"></svg:path></svg:g>`,
})
export class TablerChargingPileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
