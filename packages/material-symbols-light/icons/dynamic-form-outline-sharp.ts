import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDynamicFormOutlineSharpIcon],svg[material-symbols-light-dynamic-form-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 11V4.5H13V11zm1-1H12V5.5H3.5zm-1 9.5V13H15v6.5zm1-1H14V14H3.5zm13.5 1V11h-2V4.5h6.27l-2 5.116h1.96zM5 17h1.5v-1.5H5zm0-8.5h1.5V7H5zM3.5 10V5.5zm0 8.5V14z"></svg:path>`,
})
export class MaterialSymbolsLightDynamicFormOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
