import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSleepIcon],svg[mdi-power-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.73 18c-3.33 3.69-9.02 4-12.73.64c-3.67-3.33-3.96-9.02-.63-12.71A9.05 9.05 0 0 1 11.27 3c-3.31 3.7-3 9.39.73 12.71c1.63 1.48 3.78 2.29 6 2.29z"></svg:path>`,
})
export class MdiPowerSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
