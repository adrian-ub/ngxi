import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesArrowRightOutlineIcon],svg[bubbles-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 12h22.5m-10.5 10.5L23.25 12L12.75 1.5"></svg:path>`,
})
export class BubblesArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
