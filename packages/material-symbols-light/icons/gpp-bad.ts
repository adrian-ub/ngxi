import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGppBadIcon],svg[material-symbols-light-gpp-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.9 14.73l2.1-2.1l2.1 2.1l.708-.707l-2.1-2.1l2.1-2.1l-.708-.707l-2.1 2.1l-2.1-2.1l-.708.707l2.1 2.1l-2.1 2.1zm2.1 6.232q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963"></svg:path>`,
})
export class MaterialSymbolsLightGppBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
