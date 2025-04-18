import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer10SelectSharpIcon],svg[material-symbols-timer-10-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h3V8h-3zm-3 3V5h9v14zm-4 0V8H1V5h5v14zm14 0v-2h4v-1h-4v-5h6v2h-4v1h4v5z"></svg:path>`,
})
export class MaterialSymbolsTimer10SelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
