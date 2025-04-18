import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMailboxIcon],svg[ps-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M367 0H145q-14 0-25.5 9T105 32L0 299v170q0 18 12.5 30.5T43 512h426q18 0 30.5-12.5T512 469V299L407 32q-3-14-14.5-23T367 0m102 469H43V341h85l43 64h170l43-64h85zm-81-170q-29 0-38 23l-30 41H192l-30-41q-9-23-38-23H51l98-256h214l98 256z"></svg:path>`,
})
export class PsMailboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
