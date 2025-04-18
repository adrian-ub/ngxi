import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundRightSolidIcon],svg[streamline-arrow-round-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.65 1.002a.75.75 0 0 1 1.28-.53l2.398 2.4a.75.75 0 0 1 0 1.06L9.93 6.33a.75.75 0 0 1-1.28-.53V4.4H7a3.798 3.798 0 1 0 3.798 3.8a1 1 0 1 1 2 0A5.798 5.798 0 1 1 7 2.401h1.65z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoundRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
