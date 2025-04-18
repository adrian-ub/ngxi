import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrewIcon],svg[arcticons-crew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.985 36.7a6.93 6.93 0 0 0 6.93-6.93V13.43a6.93 6.93 0 0 0-6.93-6.93h-19.97a6.93 6.93 0 0 0-6.93 6.93v16.34a6.93 6.93 0 0 0 6.93 6.93h1.51l.027 6.17a.632.632 0 0 0 1.049.473l7.582-6.643z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.804 22.971l3.03-3.029l3.678 3.68l10.903-10.903l3.03 3.028L20.511 29.68z"></svg:path>`,
})
export class ArcticonsCrewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
