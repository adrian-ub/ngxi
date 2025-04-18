import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSubtractCircleOutlineIcon],svg[bubbles-subtract-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 12h9M.75 12a11.25 11.25 0 1 0 22.5 0a11.25 11.25 0 0 0-22.5 0"></svg:path>`,
})
export class BubblesSubtractCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
