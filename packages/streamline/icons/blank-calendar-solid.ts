import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankCalendarSolidIcon],svg[streamline-blank-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5V5h14V3.5A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zM14 6.25H0v6.25A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBlankCalendarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
