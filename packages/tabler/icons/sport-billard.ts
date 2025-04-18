import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSportBillardIcon],svg[tabler-sport-billard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class TablerSportBillardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
