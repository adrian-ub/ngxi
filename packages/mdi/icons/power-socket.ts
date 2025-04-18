import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketIcon],svg[mdi-power-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h2v-4h-2m-8 4h2v-4H7m4 2h2V9h-2M8.83 7h6.37l3.8 3.8V17H5v-6.2M8 5l-5 5v9h18v-9l-5-5z"></svg:path>`,
})
export class MdiPowerSocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
