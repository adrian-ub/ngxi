import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignSpaceBetweenIcon],svg[material-symbols-align-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V4H2V2h20v2h-5v3zM2 22v-2h5v-3h10v3h5v2z"></svg:path>`,
})
export class MaterialSymbolsAlignSpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
