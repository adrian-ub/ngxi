import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight5gSharpIcon],svg[material-symbols-light-5g-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 16.5v-1h5v-3h-5v-5h6v1h-5v3h5v5zm17-5v5h-8v-9h8v1h-7v7h6v-3H17v-1z"></svg:path>`,
})
export class MaterialSymbolsLight5gSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
