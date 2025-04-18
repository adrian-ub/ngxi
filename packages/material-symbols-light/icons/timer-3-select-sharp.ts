import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer3SelectSharpIcon],svg[material-symbols-light-timer-3-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.885 18.116v-1.231h6v-4.27h-6v-1.23h6v-4.27h-6v-1.23h7.23v5.5L11.5 12l.616.616v5.5zm10.23 0v-1h4v-2h-4v-4h5v1h-4v2h4v4z"></svg:path>`,
})
export class MaterialSymbolsLightTimer3SelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
