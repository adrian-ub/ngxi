import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVr180Create2dSharpIcon],svg[material-symbols-light-vr180-create2d-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 21V10.385H21V21zm2.5-2.192h6.23l-1.915-2.5l-1.7 2.25l-1.2-1.65zM8 16.712q-2.252-.656-3.626-2.507T3 10q0-2.931 2.034-4.966Q7.07 3 10 3q2.354 0 4.205 1.374T16.712 8H8z"></svg:path>`,
})
export class MaterialSymbolsLightVr180Create2dSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
