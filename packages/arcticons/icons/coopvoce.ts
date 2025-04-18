import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoopvoceIcon],svg[arcticons-coopvoce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C21.989 19.145 19.145 21.989 2.5 24c16.645 2.011 19.537 4.917 21.5 21.5c2.011-16.645 4.855-19.489 21.5-21.5C28.855 21.989 26.011 19.145 24 2.5"></svg:path>`,
})
export class ArcticonsCoopvoceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
