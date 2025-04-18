import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneIcon],svg[streamline-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.25 2.75h1.61a.49.49 0 0 1 .48.38l.51 2l5-1a3.69 3.69 0 0 1 4.4 3.59a1 1 0 0 1-1 1h-4.4l-1 1.58a2 2 0 0 1-1.68.92h-1.1a.5.5 0 0 1-.44-.73l.88-1.74H1.75a1 1 0 0 1-1-1v-4.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineAirplaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
