import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryHoriz000SharpIcon],svg[material-symbols-battery-horiz-000-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17v-3H2v-4h2V7h18v10zm2-2h14V9H6z"></svg:path>`,
})
export class MaterialSymbolsBatteryHoriz000SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
