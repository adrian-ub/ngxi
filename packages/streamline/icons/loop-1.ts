import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLoop1Icon],svg[streamline-loop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 10a2.75 2.75 0 0 0 2.85-1.808C13.489 7.811 13.5 7 13.5 7s-.012-.81-.15-1.192A2.75 2.75 0 0 0 10.5 4c-2.75 0-4.25 6-7 6A2.75 2.75 0 0 1 .65 8.192C.511 7.811.5 7 .5 7s.012-.81.15-1.192A2.75 2.75 0 0 1 3.5 4c2.75 0 4.25 6 7 6"></svg:path>`,
})
export class StreamlineLoop1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
