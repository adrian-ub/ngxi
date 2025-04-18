import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftIcon],svg[material-symbols-split-scene-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20V4h5q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-4 2v-2H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h7V2h2v20z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
