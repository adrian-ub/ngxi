import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMarkunreadMailboxIcon],svg[zmdi-markunread-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128q18 0 30.5 12.5T427 171v256q0 17-12.5 29.5T384 469H43q-18 0-30.5-12.5T0 427V171q0-18 12.5-30.5T43 128h42V0h171v85H128v171h43V128z"></svg:path>`,
})
export class ZmdiMarkunreadMailboxIcon {
  readonly viewBox = input("0 0 432 472")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
