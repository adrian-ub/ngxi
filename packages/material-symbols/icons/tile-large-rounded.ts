import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTileLargeRoundedIcon],svg[material-symbols-tile-large-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m10 0v-4q0-.425.288-.712T14 15h6q.425 0 .713.288T21 16v4q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 12V4q0-.425.288-.712T4 3h16q.425 0 .713.288T21 4v8q0 .425-.288.713T20 13H4q-.425 0-.712-.288T3 12"></svg:path>`,
})
export class MaterialSymbolsTileLargeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
