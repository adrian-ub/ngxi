import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChargingStationSharpIcon],svg[material-symbols-charging-station-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17v-4h-2l3-6v4h2zM5 23V1h14v22zm2-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsChargingStationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
