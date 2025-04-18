import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestWifiProIcon],svg[material-symbols-nest-wifi-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q.625 0 1.063-.437T13.5 15.5t-.437-1.062T12 14t-1.062.438T10.5 15.5t.438 1.063T12 17m-3 5q-1.925 0-3.1-1t-1.825-2.5q-.65-1.525-.862-3.25T3 12.025q0-2.55.388-4.413T4.8 4.476q1.025-1.25 2.75-1.862T12 2t4.45.613t2.75 1.862q1.025 1.275 1.413 3.138T21 12.025q0 1.5-.213 3.225t-.862 3.25Q19.275 20 18.1 21T15 22z"></svg:path>`,
})
export class MaterialSymbolsNestWifiProIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
