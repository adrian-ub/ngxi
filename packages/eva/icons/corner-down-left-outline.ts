import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaCornerDownLeftOutlineIcon],svg[eva-corner-down-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a1 1 0 0 0-1-1a1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37a1 1 0 0 0 .62-.22a1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3Z"></svg:path>`,
})
export class EvaCornerDownLeftOutlineIcon {
  readonly viewBox = input("0.05 0.05 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
