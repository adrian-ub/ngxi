import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAcUnitIcon],svg[material-symbols-light-ac-unit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21.5v-4.842l-3.75 3.7l-.708-.708l4.458-4.458V12.5H8.808L4.35 16.958l-.708-.708l3.7-3.75H2.5v-1h4.842l-3.7-3.75l.708-.708L8.808 11.5H11.5V8.808L7.042 4.35l.708-.708l3.75 3.7V2.5h1v4.842l3.75-3.7l.708.708L12.5 8.808V11.5h2.692l4.458-4.458l.708.708l-3.7 3.75H21.5v1h-4.842l3.7 3.75l-.708.708l-4.458-4.458H12.5v2.692l4.458 4.458l-.708.708l-3.75-3.7V21.5z"></svg:path>`,
})
export class MaterialSymbolsLightAcUnitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
