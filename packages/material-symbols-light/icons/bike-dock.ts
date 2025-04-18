import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBikeDockIcon],svg[material-symbols-light-bike-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1l4.77-.917l.934-12.596q.061-.635.515-1.061T11.315 4h1.392q.64 0 1.094.426t.516 1.06l.915 12.597L20 19v1zm6.808-1.827h2.384V6.193q0-.507-.341-.85T12.003 5t-.85.343q-.345.342-.345.85z"></svg:path>`,
})
export class MaterialSymbolsLightBikeDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
