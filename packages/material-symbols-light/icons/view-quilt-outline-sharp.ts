import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewQuiltOutlineSharpIcon],svg[material-symbols-light-view-quilt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6h16v12zm5.94-6.5H19V7H9.94zm5.024 5.5H19v-4.5h-4.036zM9.94 17h4.022v-4.5h-4.02zM5 17h3.94V7H5z"></svg:path>`,
})
export class MaterialSymbolsLightViewQuiltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
