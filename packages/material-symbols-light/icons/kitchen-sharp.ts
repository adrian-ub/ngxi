import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKitchenSharpIcon],svg[material-symbols-light-kitchen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 8h1V5.385h-1zm0 8.116h1v-4.347h-1zM5 21V10.385h14V21zM5 9.385V3h14v6.385z"></svg:path>`,
})
export class MaterialSymbolsLightKitchenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
