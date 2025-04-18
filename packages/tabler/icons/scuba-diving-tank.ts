import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScubaDivingTankIcon],svg[tabler-scuba-diving-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 11a4 4 0 1 1 8 0v5H8zm0 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6m-3 3V4M7 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:circle cx="12" cy="4" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerScubaDivingTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
