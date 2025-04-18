import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faChevronDownIcon],svg[fa-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1619 552l-742 741q-19 19-45 19t-45-19L45 552q-19-19-19-45.5T45 461l166-165q19-19 45-19t45 19l531 531l531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5"></svg:path>`,
})
export class FaChevronDownIcon {
  readonly viewBox = input("0 0 1664 1312")
  readonly width = input("1.27em")
  readonly height = input("1em")
}
