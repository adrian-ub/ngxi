import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCrystalballIcon],svg[picon-crystalball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6C0 6 0 0 4 0s4 6 0 6M0 7l3-2h2l3 2M3 4q0-2 2-2q-2 0-2-2q0 2-2 2q2 0 2 2"></svg:path>`,
})
export class PiconCrystalballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
