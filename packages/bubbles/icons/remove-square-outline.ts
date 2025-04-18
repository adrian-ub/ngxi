import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesRemoveSquareOutlineIcon],svg[bubbles-remove-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.182 8.818l-6.364 6.363m0-6.363l6.364 6.363M.75.75h22.5v22.5H.75z"></svg:path>`,
})
export class BubblesRemoveSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
