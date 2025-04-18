import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxOutlineSharpIcon],svg[material-symbols-stacked-inbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm2-5v3h14v-3h-3.55q-.525.9-1.425 1.45T14 14t-2.025-.55T10.55 12zm7 0q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H1V7h2v12h16zM7 15h14z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
