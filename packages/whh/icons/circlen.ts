import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclenIcon],svg[whh-circlen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v349L380 272q-12-16-28-16q-11 0-21.5 9T320 289v447q0 13 9.5 22.5T352 768t22.5-9.5T384 736V387l260 365q12 16 28 16t24-9.5t8-22.5z"></svg:path>`,
})
export class WhhCirclenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
