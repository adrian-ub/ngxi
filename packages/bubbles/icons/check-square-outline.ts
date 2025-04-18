import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCheckSquareOutlineIcon],svg[bubbles-check-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 13.223L8.45 16.7a1.048 1.048 0 0 0 1.707.051L18 6.828"></svg:path><svg:path d="M.75.749h22.5v22.5H.75z"></svg:path></svg:g>`,
})
export class BubblesCheckSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
