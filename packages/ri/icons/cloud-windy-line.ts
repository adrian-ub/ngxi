import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCloudWindyLineIcon],svg[ri-cloud-windy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v-2h3.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 0 0-12 0v.007H1V10a8 8 0 0 1 15.458-2.901A5.5 5.5 0 1 1 17.5 18zm-8 2h10v2H6zm0-8h8v2H6zm-4 4h10v2H2z"></svg:path>`,
})
export class RiCloudWindyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
