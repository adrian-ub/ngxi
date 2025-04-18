import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepsSharpIcon],svg[material-symbols-light-steps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.712 21L7.208 10H2.746L7.99 3.014L10 3.99v3.967l4.002-.971l1.989 6.002L21 17.998L20.25 21zm-5.702 0L1.997 11h4.82l10.43 10z"></svg:path>`,
})
export class MaterialSymbolsLightStepsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
