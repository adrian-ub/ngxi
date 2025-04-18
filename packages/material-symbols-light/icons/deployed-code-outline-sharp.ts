import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeployedCodeOutlineSharpIcon],svg[material-symbols-light-deployed-code-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.714v-7.427L5 8.523v7.427zm1 0L19 15.95V8.523l-6.5 3.764zm-.5-8.287l6.425-3.713L12 4L5.575 7.714zm-8 5.121V7.452l8-4.598l8 4.598v9.096l-8 4.598zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightDeployedCodeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
