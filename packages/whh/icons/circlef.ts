import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclefIcon],svg[whh-circlef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m160-768H351q-13 0-22.5 9.5T319 288v448q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5V528q0-6 5-11t11-5h209q13 0 22.5-9.5T640 480t-9.5-22.5T608 448H399q-6 0-11-4.5t-5-11.5v-96q0-6 5-11t11-5h273q13 0 22.5-9.5T704 288t-9.5-22.5T672 256"></svg:path>`,
})
export class WhhCirclefIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
