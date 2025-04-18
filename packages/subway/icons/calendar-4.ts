import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCalendar4Icon],svg[subway-calendar-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.3 0h-42.7v64h42.7zm256 0h-42.7v64h42.7zm21.4 0v85.3h-85.3V0H170.7v85.3H85.3V0H0v512h512V0zm42.6 469.3H42.7V128h426.7v341.3zm-234.6-64h42.7V320h85.3v-42.7h-85.3V192h-42.7v85.3h-85.3V320h85.3z"></svg:path>`,
})
export class SubwayCalendar4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
