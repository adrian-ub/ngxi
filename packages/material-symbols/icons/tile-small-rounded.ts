import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTileSmallRoundedIcon],svg[material-symbols-tile-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-4q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v4q0 .425-.288.713T10 19H4q-.425 0-.712-.288T3 18m10 0v-4q0-.425.288-.712T14 13h6q.425 0 .713.288T21 14v4q0 .425-.288.713T20 19h-6q-.425 0-.712-.288T13 18M3 10V6q0-.425.288-.712T4 5h6q.425 0 .713.288T11 6v4q0 .425-.288.713T10 11H4q-.425 0-.712-.288T3 10m10 0V6q0-.425.288-.712T14 5h6q.425 0 .713.288T21 6v4q0 .425-.288.713T20 11h-6q-.425 0-.712-.288T13 10"></svg:path>`,
})
export class MaterialSymbolsTileSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
