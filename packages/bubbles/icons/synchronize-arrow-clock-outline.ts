import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSynchronizeArrowClockOutlineIcon],svg[bubbles-synchronize-arrow-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.5 22a9.75 9.75 0 1 0-9.75-9.75V13"></svg:path><svg:path d="m.75 9.997l3 3l3-3m6-3.75v6.75H18"></svg:path></svg:g>`,
})
export class BubblesSynchronizeArrowClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
