import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBirthdayIcon],svg[picon-birthday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 5v.5h7V5M0 5q0-2 2-2V1h1v2h2V1h1v2q2 0 2 2v3H0"></svg:path>`,
})
export class PiconBirthdayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
