import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidApplicationTwoIcon],svg[icon-park-solid-application-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-width="4"><svg:circle cx="34.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="34.5" cy="34.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="34.5" r="6.5"></svg:circle></svg:g>`,
})
export class IconParkSolidApplicationTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
