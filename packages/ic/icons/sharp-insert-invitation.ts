import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInsertInvitationIcon],svg[ic-sharp-insert-invitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12h-5v5h5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1zm3 18H5V8h14z"></svg:path>`,
})
export class IcSharpInsertInvitationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
