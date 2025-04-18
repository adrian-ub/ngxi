import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInvertColorsIcon],svg[material-symbols-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-3.325 0-5.663-2.3T4 13.125q0-1.65.625-3.062T6.35 7.55L12 2l5.65 5.55q1.1 1.1 1.725 2.513T20 13.125q0 3.275-2.337 5.575T12 21m0-2V4.8L7.75 9q-.875.825-1.312 1.875T6 13.125q0 2.425 1.75 4.15T12 19"></svg:path>`,
})
export class MaterialSymbolsInvertColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
