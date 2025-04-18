import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanToolAltOutlineSharpIcon],svg[material-symbols-light-pan-tool-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.275 20l-6.471-7.825l1.083-.95L8 13.787V2.98h1v12.675l-4.217-2.642L9.763 19H19V9h1v11zm2.398-8V6h1v6zm3.673 0V7.192h1V12zm-1.384 3.27"></svg:path>`,
})
export class MaterialSymbolsLightPanToolAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
