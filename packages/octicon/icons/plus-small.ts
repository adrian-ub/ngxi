import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPlusSmallIcon],svg[octicon-plus-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" fill="currentColor"></svg:path>`,
})
export class OcticonPlusSmallIcon {
  readonly viewBox = input("0 0 7 16")
  readonly width = input("0.44em")
  readonly height = input("1em")
}
