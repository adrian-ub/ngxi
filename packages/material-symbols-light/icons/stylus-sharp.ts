import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusSharpIcon],svg[material-symbols-light-stylus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.162 19.273l-4.347.912l.912-4.346zm.76-.648l-3.547-3.546l11.5-11.481l3.527 3.527z"></svg:path>`,
})
export class MaterialSymbolsLightStylusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
