import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignStretchIcon],svg[material-symbols-align-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10V4H2V2h20v2h-5v6zM2 22v-2h5v-6h10v6h5v2z"></svg:path>`,
})
export class MaterialSymbolsAlignStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
