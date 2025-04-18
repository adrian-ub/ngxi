import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFastforwardClockIcon],svg[streamline-fastforward-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M7 3.5v4l2.6 1.3"></svg:path><svg:path d="M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"></svg:path><svg:path stroke-linejoin="round" d="M13.5 2v2.5H11"></svg:path></svg:g>`,
})
export class StreamlineFastforwardClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
