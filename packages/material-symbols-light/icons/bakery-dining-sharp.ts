import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBakeryDiningSharpIcon],svg[material-symbols-light-bakery-dining-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.95 17.7l-2.142-1.104l1.844-4.538L21.737 16zm-5.296-.97l.812-9.193l4.357 1.736l-3.015 7.458zm-7.462 0L4.234 9.255l4.3-1.717l.812 9.194zm-3.142.97l-1.786-1.623l2.123-4.02l1.805 4.54zm6.18-.97L9.309 6.27h5.384l-.923 10.46z"></svg:path>`,
})
export class MaterialSymbolsLightBakeryDiningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
