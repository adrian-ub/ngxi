import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMaleIcon],svg[jam-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.364 14.636a5 5 0 1 0 7.071-7.071a5 5 0 0 0-7.071 7.071m7.728-9.142l2.553-2.553h-1.517a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1v4a1 1 0 1 1-2 0V4.286l-2.622 2.622A7.002 7.002 0 0 1 2.95 16.05a7 7 0 0 1 9.142-10.556"></svg:path>`,
})
export class JamMaleIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
