import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsPlaySolidIcon],svg[bubbles-controls-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.427 7.072L1.502.11A1.04 1.04 0 0 0 0 1.038v13.925a1.038 1.038 0 0 0 1.502.928l13.925-6.962a1.038 1.038 0 0 0 0-1.857"></svg:path>`,
})
export class BubblesControlsPlaySolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
