import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSlightLeftSharpIcon],svg[material-symbols-light-turn-slight-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 19.77v-7.312l-5.788-5.77V9.67h-1V5h4.669v1H8.4l6.1 6.08v7.69z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSlightLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
