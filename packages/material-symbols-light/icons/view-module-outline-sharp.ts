import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewModuleOutlineSharpIcon],svg[material-symbols-light-view-module-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.002 11.5h3.979V7h-3.979zm-4.985 0h3.98V7h-3.98zm-4.978 0h3.978V7H5.04zm0 5.5h3.978v-4.5H5.04zm4.978 0h3.98v-4.5h-3.98zm4.985 0h3.979v-4.5h-3.979zM4.039 18V6H19.98v12z"></svg:path>`,
})
export class MaterialSymbolsLightViewModuleOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
