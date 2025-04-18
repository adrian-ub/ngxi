import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForwardIcon],svg[material-symbols-light-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.692 16.308l-.713-.708l4.6-4.6l-4.6-4.6l.713-.708L21 11zM3 18v-3q0-1.864 1.318-3.182T7.5 10.5h7.464l-4.1-4.1l.713-.708L16.884 11l-5.307 5.308l-.713-.708l4.1-4.1H7.5q-1.442 0-2.471 1.029T4 15v3z"></svg:path>`,
})
export class MaterialSymbolsLightForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
