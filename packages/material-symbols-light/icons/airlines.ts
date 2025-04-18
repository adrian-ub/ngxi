import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlinesIcon],svg[material-symbols-light-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19L13.289 5h7.73l-2.807 14zm11.289-5.616q.78 0 1.342-.544t.561-1.333q0-.807-.561-1.35t-1.342-.542q-.765 0-1.315.539q-.551.539-.551 1.352q0 .794.55 1.336q.551.542 1.316.542"></svg:path>`,
})
export class MaterialSymbolsLightAirlinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
