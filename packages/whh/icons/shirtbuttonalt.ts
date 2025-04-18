import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhShirtbuttonaltIcon],svg[whh-shirtbuttonalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M352 256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhShirtbuttonaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
