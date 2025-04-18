import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleaddIcon],svg[whh-circleadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-576H576V256q0-26-19-45t-45.5-19t-45 19t-18.5 45v192H256q-27 0-45.5 19T192 512.5t18.5 45T256 576h192v192q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V576h192q27 0 45.5-18.5t18.5-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhCircleaddIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
