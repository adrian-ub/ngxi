import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveGroupSharpIcon],svg[material-symbols-light-move-group-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17v-3.115h1V16h12V6h-12v2.116h-1V3h14v14zm-3 3V6.616h1V19h12.385v1zm8.923-5.327l-.688-.689l2.44-2.484H6.5v-1h7.675l-2.44-2.484l.688-.689L16.096 11z"></svg:path>`,
})
export class MaterialSymbolsLightMoveGroupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
