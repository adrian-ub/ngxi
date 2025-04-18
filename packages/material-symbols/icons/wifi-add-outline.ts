import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddOutlineIcon],svg[material-symbols-wifi-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6 0L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925"></svg:path>`,
})
export class MaterialSymbolsWifiAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
