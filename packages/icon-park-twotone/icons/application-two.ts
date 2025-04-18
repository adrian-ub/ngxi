import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneApplicationTwoIcon],svg[icon-park-twotone-application-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTApplicationTwo0"><svg:g fill="#555" stroke="#fff" stroke-width="4"><svg:circle cx="34.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="34.5" cy="34.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="34.5" r="6.5"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTApplicationTwo0)"></svg:path>`,
})
export class IconParkTwotoneApplicationTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
