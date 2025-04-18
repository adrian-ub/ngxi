import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletIcon],svg[zmdi-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 21q17 0 29.5 12.5T469 64v256q0 18-12.5 30.5T427 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm-43 299V64H85v256z"></svg:path>`,
})
export class ZmdiTabletIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
