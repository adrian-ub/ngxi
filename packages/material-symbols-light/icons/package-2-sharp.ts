import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackage2SharpIcon],svg[material-symbols-light-package-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.86v-8.573L4 7.95v8.598zm1 0l7.5-4.312V7.95l-7.5 4.337zm3.667-11.846l3.277-1.88L12 2.855L8.775 4.708zM12 11.427l3.167-1.835L7.742 5.3L4.57 7.121z"></svg:path>`,
})
export class MaterialSymbolsLightPackage2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
