import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCalendarIcon],svg[ps-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 43h-43V21q0-21-21-21t-21 21v22H149V21q0-21-21-21t-21 21v22H64q-27 0-45.5 19.5T0 109v358q0 19 12.5 32T43 512h426q18 0 30.5-13t12.5-32V109q0-27-18.5-46.5T448 43m21 426H43V171h426zm0-341H43v-19q0-10 6-17t15-7h384q9 0 15 7t6 17z"></svg:path>`,
})
export class PsCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
