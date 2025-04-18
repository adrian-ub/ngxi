import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsStopSolidIcon],svg[bubbles-controls-stop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.333 1.334h13.334v13.333H1.333z"></svg:path>`,
})
export class BubblesControlsStopSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
