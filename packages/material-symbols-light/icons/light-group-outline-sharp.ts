import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLightGroupOutlineSharpIcon],svg[material-symbols-light-light-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21v-1h7v1zm13.507-.961q-.64 0-1.093-.463q-.453-.462-.453-1.095H12.04v-.706q0-1.711 1.338-2.884t3.123-1.349V3.981h1v9.561q1.81.177 3.145 1.35q1.336 1.172 1.336 2.883v.706h-3.423q0 .632-.446 1.095t-1.105.463M6.5 18.5V11H2.008l1.861-7h6.281l1.862 7H7.5v7.5zm6.6-1h7.8q-.165-1.388-1.308-2.194t-2.596-.806q-1.429 0-2.577.806T13.1 17.5M3.3 10h7.4L9.375 5H4.65zM17 16"></svg:path>`,
})
export class MaterialSymbolsLightLightGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
