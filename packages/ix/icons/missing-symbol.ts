import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMissingSymbolIcon],svg[ix-missing-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM256 271.085L121.751 405.333h268.497zM106.666 121.751v268.497L240.915 256zm298.667 0L271.085 256l134.248 134.248zm-15.085-15.085H121.751L256 240.915z"></svg:path>`,
})
export class IxMissingSymbolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
