import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCssMapIcon],svg[catppuccin-css-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="M.5 4.06c0 .77.24 1.52.7 2.13l2.24 3.96l.04.08h0c.13.17.32.27.52.27s.36-.09.48-.23h0l.03-.03l.08-.15l2.2-3.88c.46-.61.71-1.37.71-2.15A3.63 3.63 0 0 0 3.88.5C1.95.5.5 2.1.5 4.06"></svg:path><svg:path stroke="#ed8796" d="M5.5 4A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 2.5 4A1.5 1.5 0 0 1 4 2.5A1.5 1.5 0 0 1 5.5 4"></svg:path><svg:path stroke="#8aadf4" d="M10 3.5h5.5l-1.27 9.8L10 15l-4.23-1.7L5.6 12"></svg:path><svg:path stroke="#cad3f5" d="M9.46 5.5h3.08L12 11l-2 1l-2-1l-.05-.5m.55-2h3.62"></svg:path></svg:g>`,
})
export class CatppuccinCssMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
