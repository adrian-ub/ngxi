import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKitchenOutlineSharpIcon],svg[material-symbols-light-kitchen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 8V5.385h1V8zm0 8.116v-4.347h1v4.347zM5 21V3h14v18zm1-1h12v-9.615H6zM6 9.385h12V4H6z"></svg:path>`,
})
export class MaterialSymbolsLightKitchenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
