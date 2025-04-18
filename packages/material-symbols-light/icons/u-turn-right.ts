import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUTurnRightIcon],svg[material-symbols-light-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.789 20V9.385q0-2.25 1.567-3.818T12.173 4t3.818 1.567t1.567 3.817v4.989l2.08-2.08l.708.707l-3.288 3.288L13.769 13l.708-.708l2.08 2.081V9.385q0-1.823-1.28-3.104T12.173 5T9.069 6.28T7.79 9.386V20z"></svg:path>`,
})
export class MaterialSymbolsLightUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
