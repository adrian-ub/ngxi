import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackage2OutlineSharpIcon],svg[material-symbols-light-package-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.714v-7.427L5 8.523v7.427zm1 0L19 15.95V8.523l-6.5 3.764zm-.5 1.432l-8-4.598V7.452l8-4.598l8 4.598v9.096zm3.712-11.871l2.713-1.561L12 4L9.3 5.548zM12 11.427l2.7-1.568l-6.425-3.713l-2.7 1.567z"></svg:path>`,
})
export class MaterialSymbolsLightPackage2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
