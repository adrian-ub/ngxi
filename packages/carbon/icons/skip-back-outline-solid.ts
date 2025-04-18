import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackOutlineSolidIcon],svg[carbon-skip-back-outline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22a1 1 0 0 1-.486-.126l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11v10a1 1 0 0 1-1 1m-12 0H9V10h2z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonSkipBackOutlineSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
