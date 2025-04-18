import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSleepIcon],svg[mdi-light-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2zm7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9zm7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16z"></svg:path>`,
})
export class MdiLightSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
