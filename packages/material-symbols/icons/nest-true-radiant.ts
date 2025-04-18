import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestTrueRadiantIcon],svg[material-symbols-nest-true-radiant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.25 0-2.125-.875T3 18V8h2v10q0 .425.288.713T6 19t.713-.288T7 18V6q0-1.25.875-2.125T10 3t2.125.875T13 6v12q0 .425.288.713T14 19t.713-.288T15 18V6q0-1.25.875-2.125T18 3t2.125.875T21 6v10h-2V6q0-.425-.288-.712T18 5t-.712.288T17 6v12q0 1.25-.875 2.125T14 21t-2.125-.875T11 18V6q0-.425-.288-.712T10 5t-.712.288T9 6v12q0 1.25-.875 2.125T6 21"></svg:path>`,
})
export class MaterialSymbolsNestTrueRadiantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
