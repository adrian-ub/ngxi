import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSkullIcon],svg[whh-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 806v122q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68V806q-89-63-140.5-156.5T0 448q0-91 38-174t102.5-143t153-95.5T480 0t186.5 35.5t153 95.5T922 274t38 174q0 108-51.5 202T768 806M288 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m96 384h192l-96-128zm288-384q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhSkullIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
