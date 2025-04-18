import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDestructionSharpIcon],svg[material-symbols-light-destruction-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20.23v-6.442h16v6.443zm2.66-7.941l-3.622-2.1l5.096-.866l-1.393-5.048l4.263 3.044L13.6 2.77l.865 5.154l5.048-1.394l-3.025 4.263l2.647 1.496z"></svg:path>`,
})
export class MaterialSymbolsLightDestructionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
