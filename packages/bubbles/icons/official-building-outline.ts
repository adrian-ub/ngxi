import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesOfficialBuildingOutlineIcon],svg[bubbles-official-building-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 23.48h22m-22-7h22m-21 0v7m20-7v7m-18-14h16m-14 0v7m4-4.5v2.5m4-2.5v2.5m-4 4v2.5m-4-2.5v2.5m8-2.5v2.5m4-2.5v2.5m0-11.5v7m-12-7a6 6 0 1 1 12 0zm6-6V.521"></svg:path>`,
})
export class BubblesOfficialBuildingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
