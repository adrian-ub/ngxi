import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackStarOutlineSharpIcon],svg[material-symbols-light-stack-star-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.187 17.673L15 16.567l1.814 1.106l-.485-2.08l1.596-1.36l-2.09-.18L15 12.096l-.836 1.957l-2.089.18l1.596 1.36zM6.616 14v1H3V3h12v3.616h-1V4H4v10zM9 21V9h12v12zm1-1h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsLightStackStarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
