import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardTravelOutlineSharpIcon],svg[material-symbols-light-card-travel-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-2.423H4zm-1 1V7h5V3.77h8V7h5v13zm1-5.577h16V8h-4v1.616h-1V8H9v1.616H8V8H4zM9 7h6V4.77H9zM4 19V8v1.616V8v1.616V8z"></svg:path>`,
})
export class MaterialSymbolsLightCardTravelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
