import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristOutlineIcon],svg[material-symbols-wrist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1v-2h5.9l3.45 3.425L8.875 15.5H20q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612zM1 9V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7H8.825q-.2 0-.375.088t-.325.212L6.4 9zm13 5v-2h8q.425 0 .713.288T23 13t-.288.713T22 14zm0-3.5v-2h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5z"></svg:path>`,
})
export class MaterialSymbolsWristOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
