import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNearbyErrorSharpIcon],svg[material-symbols-nearby-error-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-8h2v8zm1 4q-.425 0-.712-.288T20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22m-9 .8L1.2 12L12 1.2l6 6v3.6l-6-6L4.8 12l7.2 7.2l6-6v3.6zm0-6.4L7.6 12L12 7.6l4.4 4.4z"></svg:path>`,
})
export class MaterialSymbolsNearbyErrorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
