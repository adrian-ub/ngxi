import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpIcon],svg[material-symbols-split-scene-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-5h16v5q0 .825-.587 1.413T18 22zm-4-9v-2h2V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
