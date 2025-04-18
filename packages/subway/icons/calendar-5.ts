import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCalendar5Icon],svg[subway-calendar-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.3 0h-42.7v64h42.7zm277.4 0v85.3h-85.3V0H170.7v85.3H85.3V0H0v512h512V0zm42.6 469.3H42.7V128h426.7v341.3zM405.3 0h-42.7v64h42.7zm-42.6 277.3H149.3V320h213.3v-42.7z"></svg:path>`,
})
export class SubwayCalendar5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
