import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCableSharpIcon],svg[material-symbols-cable-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-5h2V7q0-1.65 1.175-2.825T9 3t2.825 1.175T13 7v10q0 .825.588 1.413T15 19t1.413-.587T17 17v-7h-2V5h1V3h4v2h1v5h-2v7q0 1.65-1.175 2.825T15 21t-2.825-1.175T11 17V7q0-.825-.587-1.412T9 5t-1.412.588T7 7v7h2v5H8v2H4v-2z"></svg:path>`,
})
export class MaterialSymbolsCableSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
