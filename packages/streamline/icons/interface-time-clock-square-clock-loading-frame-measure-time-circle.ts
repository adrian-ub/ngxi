import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeClockSquareClockLoadingFrameMeasureTimeCircleIcon],svg[streamline-interface-time-clock-square-clock-loading-frame-measure-time-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="4"></svg:circle><svg:path d="M7 5.5V7h1.5"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTimeClockSquareClockLoadingFrameMeasureTimeCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
