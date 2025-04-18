import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFlagIcon],svg[dashicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18V3H3v15zm1-6V4c3-1 7 1 11 0v8c-3 1.27-8-1-11 0"></svg:path>`,
})
export class DashiconsFlagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
