import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMilitaryAwardIcon],svg[tabler-military-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M8.5 10.5L7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5m7-4.5l1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5"></svg:path></svg:g>`,
})
export class TablerMilitaryAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
