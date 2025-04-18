import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpOutlineRoundedIcon],svg[material-symbols-split-scene-up-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-4q0-.425.288-.712T5 15t.713.288T6 16v4h12v-4q0-.425.288-.712T19 15t.713.288T20 16v4q0 .825-.587 1.413T18 22zm-3-9q-.425 0-.712-.288T2 12t.288-.712T3 11h1V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h1q.425 0 .713.288T22 12t-.288.713T21 13zm15 7H6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
