import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarFilledIcon],svg[tdesign-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.5V4H2v5h20V4h-4V1.5h-2V4H8V1.5zM22 22V11H2v11z"></svg:path>`,
})
export class TdesignCalendarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
