import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer3SelectSharpIcon],svg[material-symbols-timer-3-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-3h6v-2.5H4v-3h6V8H4V5h9v5.5L11.5 12l1.5 1.5V19zm11 0v-2h4v-1h-4v-5h6v2h-4v1h4v5z"></svg:path>`,
})
export class MaterialSymbolsTimer3SelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
