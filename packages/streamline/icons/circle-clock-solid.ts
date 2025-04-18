import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleClockSolidIcon],svg[streamline-circle-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m.625-9.5a.625.625 0 1 0-1.25 0V7c0 .146.051.288.145.4l2.5 3a.625.625 0 1 0 .96-.8L7.625 6.774z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCircleClockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
