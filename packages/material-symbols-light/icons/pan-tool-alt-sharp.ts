import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanToolAltSharpIcon],svg[material-symbols-light-pan-tool-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.275 20l-6.471-7.825l1.083-.95L8 13.787V2.98h1v8.558h2.673V6h1v5.539h2.673V7.191h1v4.347H19V9h1v11z"></svg:path>`,
})
export class MaterialSymbolsLightPanToolAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
