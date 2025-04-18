import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSimCardAlertIcon],svg[ic-twotone-sim-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z"></svg:path><svg:path fill="currentColor" d="M11 15h2v2h-2zm0-7h2v5h-2z"></svg:path>`,
})
export class IcTwotoneSimCardAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
