import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMarkunreadMailboxIcon],svg[ic-sharp-markunread-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H10v6H8V4h6V0H6v6H2v16h20z"></svg:path>`,
})
export class IcSharpMarkunreadMailboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
