import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBakeryDiningOutlineSharpIcon],svg[material-symbols-light-bakery-dining-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.87 17.412l1.503-1.62l-1.911-3.584l-1.666 4.123zm-5.308-.912h2.084l2.877-7.094l-4.196-1.667zm-7.208 0h2.085l-.766-8.761l-4.138 1.648zm-3.223.912l2.073-1.081l-1.627-4.123l-1.95 3.661zm6.308-.912h3.123l.877-10H9.562zm-6.51 2.137l-2.496-2.554L4.077 11l-.854-2.175l5.366-2.104L8.483 5.5h7.029l-.1 1.202l5.404 2.18l-.854 2.068l2.63 5.012l-2.51 2.682l-2.228-1.144H6.134z"></svg:path>`,
})
export class MaterialSymbolsLightBakeryDiningOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
