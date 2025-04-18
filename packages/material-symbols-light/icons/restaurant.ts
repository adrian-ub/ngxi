import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRestaurantIcon],svg[material-symbols-light-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 21.5v-9.034q-1.16-.177-1.965-1.064q-.804-.886-.804-2.171V2.5h1v6.73H7.5V2.5h1v6.73h1.77V2.5h1v6.73q0 1.286-.805 2.172q-.806.887-1.965 1.064V21.5zm9.23 0v-8h-2.46V7q0-1.671.942-2.96q.944-1.29 2.519-1.501V21.5z"></svg:path>`,
})
export class MaterialSymbolsLightRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
