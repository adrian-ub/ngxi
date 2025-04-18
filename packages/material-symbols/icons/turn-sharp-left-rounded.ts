import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTurnSharpLeftRoundedIcon],svg[material-symbols-turn-sharp-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v-5H8q-.825 0-1.412-.587T6 13V6.8l-.9.9q-.275.275-.7.275T3.7 7.7T3.425 7t.275-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L8 6.8V13h8q.825 0 1.413.588T18 15v5q0 .425-.288.713T17 21t-.712-.288T16 20"></svg:path>`,
})
export class MaterialSymbolsTurnSharpLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
