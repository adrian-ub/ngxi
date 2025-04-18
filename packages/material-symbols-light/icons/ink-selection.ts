import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkSelectionIcon],svg[material-symbols-light-ink-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 20v-8.615H20v1h-6.908L20 19.292l-.708.708l-6.908-6.908V20zm-3.693 0v-1.23h1.231V20zM5.231 5.23H4q0-.507.362-.868T5.23 4zm2.461 0V4h1.231v1.23zm3.693 0V4h1.23v1.23zm3.692 0V4h1.23v1.23zm3.692 0V4q.508 0 .87.362T20 5.23zM5.231 18.77V20q-.508 0-.87-.362T4 18.77zM4 16.307v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 0v-1.23H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightInkSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
