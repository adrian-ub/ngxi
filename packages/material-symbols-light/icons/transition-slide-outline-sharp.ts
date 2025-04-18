import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitionSlideOutlineSharpIcon],svg[material-symbols-light-transition-slide-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h5.039v14zm1-.975h3.039V5.975H3zM9.423 19V5H22v14zm1-.975H21V5.975H10.423zm-4.384 0V5.975zm4.384 0V5.975z"></svg:path>`,
})
export class MaterialSymbolsLightTransitionSlideOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
