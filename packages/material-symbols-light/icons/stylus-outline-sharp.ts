import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusOutlineSharpIcon],svg[material-symbols-light-stylus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.277 19.25l-4.461.935l.934-4.462zm0 0L4.75 15.723L16.875 3.598l3.527 3.527zm.2-1.602L19 7.125L16.875 5L6.352 15.523z"></svg:path>`,
})
export class MaterialSymbolsLightStylusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
