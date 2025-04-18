import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsForwardSolidIcon],svg[bubbles-controls-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.667 7.243l-7-6.32A1 1 0 0 0 7 1.68v3.684a.167.167 0 0 1-.279.124L1.667.923A1 1 0 0 0 0 1.68v12.64a1 1 0 0 0 1.667.758l5.055-4.565a.167.167 0 0 1 .279.124v3.683a1 1 0 0 0 1.666.758l7-6.32a1.026 1.026 0 0 0 0-1.514"></svg:path>`,
})
export class BubblesControlsForwardSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
