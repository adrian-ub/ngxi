import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGreaterThanIcon],svg[la-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2.156L22.531 16L6 23.844V26l20-9.219V15.22z"></svg:path>`,
})
export class LaGreaterThanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
