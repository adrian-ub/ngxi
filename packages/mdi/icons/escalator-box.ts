import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorBoxIcon],svg[mdi-escalator-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm9.34 3h2.71a2 2 0 0 1 2 2c0 1.11-.89 2-2 2H16l-6 8H7.05a2 2 0 1 1 0-4h1.29z"></svg:path>`,
})
export class MdiEscalatorBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
