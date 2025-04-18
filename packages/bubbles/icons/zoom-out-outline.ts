import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesZoomOutOutlineIcon],svg[bubbles-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.875 9.811a9.062 9.062 0 1 1-18.124.002a9.062 9.062 0 0 1 18.124-.002M5.25 9.749h9m1.971 6.47l7.03 7.03"></svg:path>`,
})
export class BubblesZoomOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
