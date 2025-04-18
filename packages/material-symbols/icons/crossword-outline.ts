import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCrosswordOutlineIcon],svg[material-symbols-crossword-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4v-4h-4zm-6-6h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4zm0-6h4V4h-4zM8 22v-6H2V8h12V2h8v14h-6v6z"></svg:path>`,
})
export class MaterialSymbolsCrosswordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
