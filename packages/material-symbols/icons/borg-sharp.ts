import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorgSharpIcon],svg[material-symbols-borg-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 21.725l-8-4.6V13h5v3h3zM3 11V6.875l8-4.6V8H8v3zm7 3v-4h4v4zm3 7.725V16h3v-3h5v4.125zM16 11V8h-3V2.275l8 4.6V11z"></svg:path>`,
})
export class MaterialSymbolsBorgSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
