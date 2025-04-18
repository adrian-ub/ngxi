import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddCardSharpIcon],svg[material-symbols-add-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12h16V8H4zm15 10v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 20V4h20v8h-3q-2.075 0-3.537 1.463T14 17v3z"></svg:path>`,
})
export class MaterialSymbolsAddCardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
