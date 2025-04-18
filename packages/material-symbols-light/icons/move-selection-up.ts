import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveSelectionUpIcon],svg[material-symbols-light-move-selection-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.962 13.077V3h10.077v10.077zm8.846 3.962v-1.231h1.23v1.23zm-8.846 0v-1.231h1.23v1.23zM15.808 21v-1.23h1.23V21zm-4.424 0v-1.23h1.231V21zm-4.423 0v-1.23h1.231V21z"></svg:path>`,
})
export class MaterialSymbolsLightMoveSelectionUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
