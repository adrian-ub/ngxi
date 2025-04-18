import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAutomatoysIcon],svg[arcticons-automatoys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="29.916" cy="18.941" r="3.224"></svg:circle><svg:ellipse cx="11.306" cy="30.957" rx="2.478" ry="3.303" transform="rotate(-35.816 11.306 30.957)"></svg:ellipse><svg:path d="M30.688 29.099L20.08 36.206c7.636 2.046 11.208-.283 10.61-7.107"></svg:path></svg:g>`,
})
export class ArcticonsAutomatoysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
