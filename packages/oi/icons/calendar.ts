import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCalendarIcon],svg[oi-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h7V0zm0 3v4.91c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V3h-7zm1 1h1v1H1zm2 0h1v1H3zm2 0h1v1H5zM1 6h1v1H1zm2 0h1v1H3z"></svg:path>`,
})
export class OiCalendarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
