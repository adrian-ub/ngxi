import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxOutlineIcon],svg[material-symbols-stacked-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm0-5v3h14v-3h-3.55q-.525.9-1.425 1.45T14 14t-2.025-.55T10.55 12zm7 0q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H3q-.825 0-1.412-.587T1 19V7h2v12h16zM7 15h14z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
