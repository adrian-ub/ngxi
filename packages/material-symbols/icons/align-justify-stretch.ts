import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignJustifyStretchIcon],svg[material-symbols-align-justify-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22V2h2v20zM2 22V2h2v20zm11-12V7h5v3zm-7 0V7h5v3zm7 7v-3h5v3zm-7 0v-3h5v3z"></svg:path>`,
})
export class MaterialSymbolsAlignJustifyStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
