import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddIcon],svg[material-symbols-splitscreen-vertical-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23v-2h-2v-2h2v-2h2v2h2v2h-2v2zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10.1 0q-.875 0-1.487-.575T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v10.1q-.25-.05-.5-.075T20 15q-2.1 0-3.562 1.488T15 20.075q0 .25.025.475t.075.45"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
