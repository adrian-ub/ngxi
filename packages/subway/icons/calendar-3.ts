import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCalendar3Icon],svg[subway-calendar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.3 0h-42.7v64h42.7zm-256 0h-42.7v64h42.7zm277.4 0v85.3h-85.3V0H170.7v85.3H85.3V0H0v512h512V0zm42.6 469.3H42.7V128h426.7v341.3zm-64-245.3l-42.7-42.7l-149.3 149.4l-64-64l-42.7 42.7L213.3 416z"></svg:path>`,
})
export class SubwayCalendar3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
