import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSubtractSquareOutlineIcon],svg[bubbles-subtract-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 12h9M.75.75h22.5v22.5H.75z"></svg:path>`,
})
export class BubblesSubtractSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
