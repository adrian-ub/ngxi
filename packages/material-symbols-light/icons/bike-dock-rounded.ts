import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBikeDockRoundedIcon],svg[material-symbols-light-bike-dock-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 20q-.195 0-.332-.154Q4 19.692 4 19.49q0-.19.095-.349q.096-.158.272-.2l4.402-.852l.929-12.583q.043-.635.503-1.07T11.294 4h1.387q.634 0 1.094.436q.46.435.521 1.07l.929 12.583l4.377.846q.177.048.288.204t.11.344q0 .211-.144.364q-.143.153-.356.153zm6.338-1.827h2.384V6.193q0-.507-.341-.85T12.003 5t-.85.343q-.345.342-.345.85z"></svg:path>`,
})
export class MaterialSymbolsLightBikeDockRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
