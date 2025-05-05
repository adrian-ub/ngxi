import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFacebookIcon],svg[picon-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h8V0M4 8V4H3V3h1V2l1-1h2v1H5v1h2l-.5 1H5v4"></svg:path>`,
})
export class PiconFacebookIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
