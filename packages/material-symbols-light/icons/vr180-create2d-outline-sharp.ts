import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVr180Create2dOutlineSharpIcon],svg[material-symbols-light-vr180-create2d-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.712q-2.252-.656-3.626-2.507T3 10q0-2.931 2.034-4.966Q7.07 3 10 3q2.354 0 4.205 1.374T16.712 8H15.65Q15 6.2 13.463 5.1T10 4Q7.5 4 5.75 5.75T4 10q0 1.925 1.1 3.463T8 15.65zM10.385 21V10.385H21V21zm1-1H20v-8.615h-8.615zm1.192-1.192h6.23l-1.915-2.5l-1.7 2.25l-1.2-1.65zM9.825 9.825"></svg:path>`,
})
export class MaterialSymbolsLightVr180Create2dOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
