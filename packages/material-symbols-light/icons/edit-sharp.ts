import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditSharpIcon],svg[material-symbols-light-edit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-2.52l13.875-13.9l2.54 2.563L6.52 20zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496z"></svg:path>`,
})
export class MaterialSymbolsLightEditSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
