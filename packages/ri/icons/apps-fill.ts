import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAppsFillIcon],svg[ri-apps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5m0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13m10.5-10.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25M13 13h4.25A4.25 4.25 0 1 1 13 17.25z"></svg:path>`,
})
export class RiAppsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
