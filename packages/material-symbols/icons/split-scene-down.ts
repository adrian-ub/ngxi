import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownIcon],svg[material-symbols-split-scene-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5zm2 13q-.825 0-1.412-.587T4 20v-7H2v-2h20v2h-2v7q0 .825-.587 1.413T18 22z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
