import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCalendarIcon],svg[subway-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.7 320H320v42.7h42.7zm0-85.3H320v42.7h42.7zm0-85.4H320V192h42.7zm-85.4 85.4h-42.7v42.7h42.7zm0-85.4h-42.7V192h42.7zm0 170.7h-42.7v42.7h42.7zM448 149.3h-42.7V192H448zm0 85.4h-42.7v42.7H448zm0 85.3h-42.7v42.7H448zm-341.3 85.3H64V448h42.7zm0-85.3H64v42.7h42.7zm170.6 85.3h-42.7V448h42.7zm-85.3 0h-42.7V448H192zM0 0v512h512V0zm469.3 469.3H42.7V128h426.7v341.3zM106.7 234.7H64v42.7h42.7zM192 320h-42.7v42.7H192zm0-170.7h-42.7V192H192zm0 85.4h-42.7v42.7H192zm170.7 170.6H320V448h42.7z"></svg:path>`,
})
export class SubwayCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
