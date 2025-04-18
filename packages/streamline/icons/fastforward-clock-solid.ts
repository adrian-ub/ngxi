import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFastforwardClockSolidIcon],svg[streamline-fastforward-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 2.75a.75.75 0 0 1 .75.75v3.575l2.136 1.282a.75.75 0 1 1-.772 1.286l-2.5-1.5A.75.75 0 0 1 6.25 7.5v-4A.75.75 0 0 1 7 2.75"></svg:path><svg:path d="M1.5 7a5.5 5.5 0 0 1 9.82-3.405l-.966.965a.5.5 0 0 0 .353.854H13.5a.5.5 0 0 0 .5-.5V2.12a.5.5 0 0 0-.854-.354l-.76.761a7 7 0 1 0 1.427 6.086a.75.75 0 0 0-1.46-.344A5.5 5.5 0 0 1 1.5 7"></svg:path></svg:g>`,
})
export class StreamlineFastforwardClockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
