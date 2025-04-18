import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsNextSolidIcon],svg[bubbles-controls-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.667 7.242l-7-6.319A1 1 0 0 0 0 1.681v12.638a1 1 0 0 0 1.667.757l7-6.318a1.025 1.025 0 0 0 0-1.516M11.333 0H16v16h-4.667z"></svg:path>`,
})
export class BubblesControlsNextSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
