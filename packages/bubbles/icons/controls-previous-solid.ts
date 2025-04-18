import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsPreviousSolidIcon],svg[bubbles-controls-previous-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.333.923l-7 6.319a1.027 1.027 0 0 0 0 1.515l7 6.32A1 1 0 0 0 16 14.319V1.681a1 1 0 0 0-1.667-.758M0 0h4.667v16H0z"></svg:path>`,
})
export class BubblesControlsPreviousSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
