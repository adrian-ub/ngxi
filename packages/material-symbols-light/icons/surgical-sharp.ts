import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSurgicalSharpIcon],svg[material-symbols-light-surgical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.65 14.58l-2.327-2.326l7.602-7.602l2.327 2.327zm1.196 4.632l1-1h8.289v1zm-7.136.019q-.689 0-1.338-.2t-1.218-.596l5.106-5.1l2.951 2.946l-1.519 1.577q-.665.684-1.555 1.028t-1.828.345z"></svg:path>`,
})
export class MaterialSymbolsLightSurgicalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
