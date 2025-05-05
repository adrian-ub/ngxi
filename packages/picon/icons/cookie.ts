import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCookieIcon],svg[picon-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2Q5 5 8 4q0 4-4 4c-5 0-5-8 0-8Q3 3 6 2M2 3h1V2H2m1 5h1V6H3m2-1h1V4H5"></svg:path>`,
})
export class PiconCookieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
