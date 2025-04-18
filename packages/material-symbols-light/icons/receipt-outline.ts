import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReceiptOutlineIcon],svg[material-symbols-light-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20.77V3.23l1.27.962l1.346-.961l1.346.961l1.346-.961l1.346.961L12 3.231l1.346.961l1.346-.961l1.346.961l1.346-.961l1.347.961L20 3.231v17.538l-1.27-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.347-.961zm2.5-4.885h11v-1h-11zm0-3.385h11v-1h-11zm0-3.384h11v-1h-11zM5 19.1h14V4.9H5zM5 4.9v14.2z"></svg:path>`,
})
export class MaterialSymbolsLightReceiptOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
