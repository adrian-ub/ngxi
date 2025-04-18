import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatColorResetIcon],svg[material-symbols-format-color-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 16.4L8.4 5.55L12 2l5.65 5.55q1.1 1.05 1.725 2.488T20 13.1q0 .9-.2 1.725t-.55 1.575m.55 6.2l-3.1-3.1q-1.025.725-2.2 1.113T12 21q-3.325 0-5.663-2.312T4 13.1q0-1.275.4-2.45T5.6 8.4L1.4 4.2l1.4-1.4l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsFormatColorResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
