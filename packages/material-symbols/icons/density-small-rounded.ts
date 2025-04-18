import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDensitySmallRoundedIcon],svg[material-symbols-density-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.425 0-.712-.288T3 21t.288-.712T4 20h16q.425 0 .713.288T21 21t-.288.713T20 22zm0-6q-.425 0-.712-.288T3 15t.288-.712T4 14h16q.425 0 .713.288T21 15t-.288.713T20 16zm0-6q-.425 0-.712-.288T3 9t.288-.712T4 8h16q.425 0 .713.288T21 9t-.288.713T20 10zm0-6q-.425 0-.712-.288T3 3t.288-.712T4 2h16q.425 0 .713.288T21 3t-.288.713T20 4z"></svg:path>`,
})
export class MaterialSymbolsDensitySmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
