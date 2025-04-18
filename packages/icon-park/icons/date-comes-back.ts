import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDateComesBackIcon],svg[icon-park-date-comes-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 8H9C7.34315 8 6 9.34315 6 11V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V25V18"></svg:path><svg:path d="M32.2427 12.4854L36.4853 8.24271L32.2427 4.00007"></svg:path><svg:path d="M24 17V34"></svg:path><svg:path d="M32 24V34"></svg:path><svg:path d="M16 24V34"></svg:path></svg:g>`,
})
export class IconParkDateComesBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
