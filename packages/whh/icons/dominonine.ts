import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDominonineIcon],svg[whh-dominonine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominonineIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
