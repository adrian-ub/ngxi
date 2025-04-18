import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrosswordOutlineIcon],svg[material-symbols-light-crossword-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.654 20h4.673v-4.654H9.654zM4 14.346h4.654V9.673H4zm5.654 0h4.673V9.673H9.654zm5.673 0H20V9.673h-4.673zm0-5.673H20V4h-4.673zM8.654 21v-5.654H3V8.673h11.327V3H21v12.346h-5.673V21z"></svg:path>`,
})
export class MaterialSymbolsLightCrosswordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
