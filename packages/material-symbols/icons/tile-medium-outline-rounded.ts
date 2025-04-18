import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTileMediumOutlineRoundedIcon],svg[material-symbols-tile-medium-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-4q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v4q0 .425-.288.713T10 19H4q-.425 0-.712-.288T3 18m10 0v-4q0-.425.288-.712T14 13h6q.425 0 .713.288T21 14v4q0 .425-.288.713T20 19h-6q-.425 0-.712-.288T13 18M3 10V6q0-.425.288-.712T4 5h16q.425 0 .713.288T21 6v4q0 .425-.288.713T20 11H4q-.425 0-.712-.288T3 10m2 7h4v-2H5zm10 0h4v-2h-4zm2-1"></svg:path>`,
})
export class MaterialSymbolsTileMediumOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
