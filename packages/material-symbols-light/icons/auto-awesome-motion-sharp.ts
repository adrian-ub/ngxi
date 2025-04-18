import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoAwesomeMotionSharpIcon],svg[material-symbols-light-auto-awesome-motion-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V11h10v10zm-4-3.77V7h10.23v1H8v9.23zm-4-4V3h10.23v1H4v9.23z"></svg:path>`,
})
export class MaterialSymbolsLightAutoAwesomeMotionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
