import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimOktaIcon],svg[uim-okta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 2a10 10 0 1 0 10 10a9.995 9.995 0 0 0-10-10m0 15.01a5.01 5.01 0 1 1 5.01-5.01a5.014 5.014 0 0 1-5.01 5.01"></svg:path>`,
})
export class UimOktaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
