import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClockwiseOutlineIcon],svg[teenyicons-clockwise-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.495v-.5h-1v.5zM7.5 2.999H8v-1h-.5zm1-.5l.353.353l.354-.353l-.354-.354zM13 8.495a5.5 5.5 0 0 1-5.5 5.496v1c3.589 0 6.5-2.909 6.5-6.496zM7.5 13.99A5.5 5.5 0 0 1 2 8.495H1a6.5 6.5 0 0 0 6.5 6.496zM2 8.495a5.5 5.5 0 0 1 5.5-5.496v-1A6.5 6.5 0 0 0 1 8.495zM6.147.854l2 1.998l.706-.707l-2-1.999zm2 1.291l-2 1.999l.706.707l2-1.999z"></svg:path>`,
})
export class TeenyiconsClockwiseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
