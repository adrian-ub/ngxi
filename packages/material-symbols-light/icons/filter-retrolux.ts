import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterRetroluxIcon],svg[material-symbols-light-filter-retrolux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.666 20.066l-2.212-2.224q-.06 1.05-.841 1.797t-1.844.746q-1.15 0-1.94-.79t-.79-1.94t.79-1.94t1.94-.792q.465 0 .883.146q.417.147.775.45L7 8.885l5-5.039l5 5.039l-4.461 6.692v.935l2.834 2.834zm-4.897-.681q.722 0 1.226-.505t.505-1.226t-.505-1.226q-.504-.505-1.226-.505t-1.226.505t-.504 1.226t.504 1.226t1.226.504"></svg:path>`,
})
export class MaterialSymbolsLightFilterRetroluxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
