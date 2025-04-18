import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSquareClockSolidIcon],svg[streamline-square-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zM11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M7.625 5a.625.625 0 1 0-1.25 0v2c0 .345.28.625.625.625h2a.625.625 0 1 0 0-1.25H7.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSquareClockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
