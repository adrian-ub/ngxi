import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTimeClockCircleOutlineIcon],svg[bubbles-time-clock-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M1 10.931a9.931 9.931 0 1 0 19.862 0a9.931 9.931 0 0 0-19.862 0m9.931 0V7.384m0 3.547l4.433 4.434"></svg:path>`,
})
export class BubblesTimeClockCircleOutlineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
