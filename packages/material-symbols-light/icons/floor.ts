import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorIcon],svg[material-symbols-light-floor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21.5v-1H7V16h4.5v-4.5H16V7h4.5V3.5h1V8H17v4.5h-4.5V17H8v4.5z"></svg:path>`,
})
export class MaterialSymbolsLightFloorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
