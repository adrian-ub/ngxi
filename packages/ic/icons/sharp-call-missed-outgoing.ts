import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCallMissedOutgoingIcon],svg[ic-sharp-call-missed-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7z"></svg:path>`,
})
export class IcSharpCallMissedOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
