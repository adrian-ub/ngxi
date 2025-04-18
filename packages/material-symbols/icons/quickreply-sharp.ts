import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQuickreplySharpIcon],svg[material-symbols-quickreply-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23v-5h-2v-6h5l-1.7 4h2.2zM2 22V2h20v8h-7v8H6z"></svg:path>`,
})
export class MaterialSymbolsQuickreplySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
