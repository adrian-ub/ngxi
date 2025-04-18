import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectMoveUpIcon],svg[material-symbols-light-text-select-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h16v1zm7.5-3.5V9.633l-2.1 2.075L8.692 11L12 7.692L15.308 11l-.708.708l-2.1-2.075V16.5zM4 5V4h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectMoveUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
