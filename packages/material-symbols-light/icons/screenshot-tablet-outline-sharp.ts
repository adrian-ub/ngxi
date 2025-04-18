import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotTabletOutlineSharpIcon],svg[material-symbols-light-screenshot-tablet-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14zM4.5 6H3v12h1.5zm1 12h13V6h-13zm14-12v12H21V6zm0 0H21zm-15 0H3zm9.423 10.616h3.193v-3.193h-.885v2.308h-2.308zm-7.038-6.039h.884V8.269h2.308v-.885H6.884z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotTabletOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
