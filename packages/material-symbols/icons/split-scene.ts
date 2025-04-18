import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneIcon],svg[material-symbols-split-scene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5v16zm7 2V2h2v2h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
