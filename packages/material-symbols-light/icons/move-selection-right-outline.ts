import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveSelectionRightOutlineIcon],svg[material-symbols-light-move-selection-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.923 17.039V6.961H21v10.077zm1-1H20V7.96h-8.077zm-4.961 1v-1.231h1.23v1.23zm0-8.847v-1.23h1.23v1.23zM3 17.038v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23zM15.962 12"></svg:path>`,
})
export class MaterialSymbolsLightMoveSelectionRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
