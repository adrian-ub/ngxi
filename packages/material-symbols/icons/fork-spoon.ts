import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForkSpoonIcon],svg[material-symbols-fork-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22v-9.15q-1.35-.35-2.175-1.425T3 9V2h2v6h1V2h2v6h1V2h2v7q0 1.35-.825 2.425T8 12.85V22zm10 0v-9.525q-1.35-.45-2.175-1.887T13 7.325Q13 5.1 14.175 3.55T17 2t2.825 1.562T21 7.35q0 1.825-.825 3.25T18 12.475V22z"></svg:path>`,
})
export class MaterialSymbolsForkSpoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
