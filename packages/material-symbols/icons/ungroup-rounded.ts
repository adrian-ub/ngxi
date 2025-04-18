import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUngroupRoundedIcon],svg[material-symbols-ungroup-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12.4L9.4 16q-.275.275-.7.275T8 16t-.275-.7t.275-.7l3.6-3.6H9q-.425 0-.712-.288T8 10t.288-.712T9 9h5q.425 0 .713.288T15 10v5q0 .425-.288.713T14 16t-.712-.288T13 15zM13 5q-.425 0-.712-.288T12 4t.288-.712T13 3h6q.825 0 1.413.588T21 5v6q0 .425-.288.713T20 12t-.712-.288T19 11V5zM5 21q-.825 0-1.412-.587T3 19V4q0-.425.288-.712T4 3t.713.288T5 4v15h15q.425 0 .713.288T21 20t-.288.713T20 21z"></svg:path>`,
})
export class MaterialSymbolsUngroupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
