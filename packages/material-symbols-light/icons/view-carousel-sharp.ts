import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCarouselSharpIcon],svg[material-symbols-light-view-carousel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V8h3.346v8zm4.73 2V6h8.54v12zm9.924-2V8H21v8z"></svg:path>`,
})
export class MaterialSymbolsLightViewCarouselSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
