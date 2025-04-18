import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSerifSharpIcon],svg[material-symbols-light-serif-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 18h2.792v-.325H7.525L8.869 14h4.023l1.308 3.675h-1.392V18h4.069v-.325h-.775L11.802 6h-.51L7 17.675h-.8zM9 13.625l1.908-5.258l1.86 5.258zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsLightSerifSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
