import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKitchenSharpIcon],svg[material-symbols-kitchen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2V5H8zm0 9h2v-5H8zm-4 5V11h16v11zM4 9V2h16v7z"></svg:path>`,
})
export class MaterialSymbolsKitchenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
