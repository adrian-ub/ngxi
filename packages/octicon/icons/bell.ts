import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBellIcon],svg[octicon-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5c.38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonBellIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
