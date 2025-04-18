import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEyeNoIcon],svg[system-uicons-eye-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.211 6.26Q3.985 7.63 2 10.5Q5.805 16 10.5 16q2.135 0 4.085-1.137m1.588-1.14Q17.643 12.46 19 10.5Q15.195 5 10.5 5q-1.245 0-2.429.387M4 4l13 13.071"></svg:path>`,
})
export class SystemUiconsEyeNoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
