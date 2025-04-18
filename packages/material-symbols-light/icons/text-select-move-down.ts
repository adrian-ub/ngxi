import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectMoveDownIcon],svg[material-symbols-light-text-select-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4h16v1zm8 11.308L8.692 13l.708-.708l2.1 2.075V7.5h1v6.867l2.1-2.075l.708.708zM4 20v-1h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
