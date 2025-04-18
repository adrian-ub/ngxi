import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExpandDiagonalOutlineIcon],svg[bubbles-expand-diagonal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.35 13.5l-9.6 9.6M23.2 7.95V.75H16M.75 16v7.2h7.2M23.1.75l-9.6 9.6"></svg:path>`,
})
export class BubblesExpandDiagonalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
