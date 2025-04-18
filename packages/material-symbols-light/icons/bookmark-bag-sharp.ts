import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarkBagSharpIcon],svg[material-symbols-light-bookmark-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.577 13.462h.846v.788h1.154v-.788h.827v.788h1.154v-.788h.846V8.385h-1.077V6.5h-2.673v1.885H9.577zm1.846-5.077V7.268h1.135v1.115zM6 19.5V4h12v15.5l-6-2.583z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarkBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
