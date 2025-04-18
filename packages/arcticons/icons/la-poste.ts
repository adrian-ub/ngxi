import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLaPosteIcon],svg[arcticons-la-poste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 31.06l39-9.3H19.741s-.897 4.145-15.241 9.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.213 24.45a48.7 48.7 0 0 1-5.846 6.61H4.5m15.24-9.302c-1.121-1.68-4.483-3.698-8.181-4.818h22.527a2.35 2.35 0 0 1 .77 1.96a6.6 6.6 0 0 1-.93 2.858"></svg:path>`,
})
export class ArcticonsLaPosteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
