import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGarageDoorRoundedIcon],svg[material-symbols-garage-door-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12h6q.425 0 .713.288T16 13t-.288.713T15 14H9q-.425 0-.712-.288T8 13t.288-.712T9 12m0 3h6q.425 0 .713.288T16 16t-.288.713T15 17H9q-.425 0-.712-.288T8 16t.288-.712T9 15m0 3h6q.425 0 .713.288T16 19t-.288.713T15 20H9q-.425 0-.712-.288T8 19t.288-.712T9 18m-4 1v-7H3.3q-.35 0-.475-.325t.15-.55L10.65 4.2q.275-.275.638-.388T12 3.7t.713.113t.637.387l7.675 6.925q.275.225.15.55T20.7 12H19v7q0 .425-.288.713T18 20t-.712-.288T17 19v-8H7v8q0 .425-.288.713T6 20t-.712-.288T5 19"></svg:path>`,
})
export class MaterialSymbolsGarageDoorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
