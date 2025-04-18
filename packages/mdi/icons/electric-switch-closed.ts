import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElectricSwitchClosedIcon],svg[mdi-electric-switch-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 11a3 3 0 0 0-5.65 0H8.82a3 3 0 0 0-5.65 0H1v2h2.17a3 3 0 0 0 5.65 0h6.36a3 3 0 0 0 5.65 0H23v-2M6 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m12 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiElectricSwitchClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
