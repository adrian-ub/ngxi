import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaningCresentMoonIcon],svg[streamline-waning-cresent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 7a7 7 0 0 1 3.44-6A6.6 6.6 0 0 0 9 .5a6.5 6.5 0 1 0 0 13a6.6 6.6 0 0 0 2.47-.5A7 7 0 0 1 8 7"></svg:path>`,
})
export class StreamlineWaningCresentMoonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
