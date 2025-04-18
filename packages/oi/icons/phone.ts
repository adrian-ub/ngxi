import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiPhoneIcon],svg[oi-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.19 0C1.08 0 1 .08 1 .19v7.63c0 .11.08.19.19.19h4.63c.11 0 .19-.08.19-.19V.19c0-.11-.08-.19-.19-.19zM2 1h3v5H2zm1.5 5.5c.28 0 .5.22.5.5s-.22.5-.5.5S3 7.28 3 7s.22-.5.5-.5"></svg:path>`,
})
export class OiPhoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
