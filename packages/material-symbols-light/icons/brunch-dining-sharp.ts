import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrunchDiningSharpIcon],svg[material-symbols-light-brunch-dining-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-1h12.462v1zm0-3.384v-1h4.23v-1.154h4v1.154h4.232v1zM18.385 21v-6.215q-.708-.64-1.2-1.535q-.493-.894-.493-2.03V3H21v8.22q0 1.136-.451 2.033t-1.164 1.532V20H21v1zm-.693-12.615H20V4h-2.308z"></svg:path>`,
})
export class MaterialSymbolsLightBrunchDiningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
