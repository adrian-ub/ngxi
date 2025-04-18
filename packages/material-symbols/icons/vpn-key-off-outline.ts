import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnKeyOffOutlineIcon],svg[material-symbols-vpn-key-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L12.15 15q-.8 1.35-2.137 2.175T7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L1.375 4.225L2.8 2.8l18.4 18.4zM17 14.175L15.825 13H17zm4 4l-2-2V13h2v-2h-7.175l-2-2H23v6h-2zM7 16q1.625 0 2.488-.875t1.237-1.575L5.475 8.3q-1.1.45-1.787 1.438T3 12q0 1.65 1.175 2.825T7 16m0-2q-.825 0-1.412-.587T5 12t.588-1.412T7 10t1.413.588T9 12t-.587 1.413T7 14m-.125-1.85"></svg:path>`,
})
export class MaterialSymbolsVpnKeyOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
