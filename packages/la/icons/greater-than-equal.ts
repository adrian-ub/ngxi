import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGreaterThanEqualIcon],svg[la-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v2.156L22.531 14L6 20.844V23l20-8.219V13.22zm0 20v2h20v-2z"></svg:path>`,
})
export class LaGreaterThanEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
