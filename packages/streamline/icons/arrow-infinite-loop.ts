import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowInfiniteLoopIcon],svg[streamline-arrow-infinite-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.43a2.37 2.37 0 0 1-1.5.57A2.75 2.75 0 0 1 .65 9.192C.511 8.811.5 8 .5 8s.012-.81.15-1.192A2.75 2.75 0 0 1 3.5 5c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 2.85-1.808C13.489 8.811 13.5 8 13.5 8s-.012-.81-.15-1.192A2.75 2.75 0 0 0 10.5 5h-2l2-2"></svg:path>`,
})
export class StreamlineArrowInfiniteLoopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
