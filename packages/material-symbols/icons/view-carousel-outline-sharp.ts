import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCarouselOutlineSharpIcon],svg[material-symbols-view-carousel-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17V7h4v10zm5 2V5h10v14zm11-2V7h4v10zm-9 0h6V7H9zm3-5"></svg:path>`,
})
export class MaterialSymbolsViewCarouselOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
