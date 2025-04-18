import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSlightRightSharpIcon],svg[material-symbols-light-turn-slight-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.77v-7.69L15.6 6h-2.98V5h4.669v4.67h-1V6.688l-5.789 5.77v7.311z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSlightRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
