import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMicrowaveGenIcon],svg[material-symbols-microwave-gen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1-3h10V7H5zm13 0q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17M7 15V9h6v6zm11-2q.425 0 .713-.288T19 12t-.288-.712T18 11t-.712.288T17 12t.288.713T18 13m0-4q.425 0 .713-.288T19 8t-.288-.712T18 7t-.712.288T17 8t.288.713T18 9"></svg:path>`,
})
export class MaterialSymbolsMicrowaveGenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
