import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTwoPagerStoreOutlineSharpIcon],svg[material-symbols-two-pager-store-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v7h-2V6h-7v5h-2V6H4v12h7v2zm12 2v-4.25h2V20h4v-2.25h2V22zm-1.2-4l1-5h8.4l1 5zm2.425-2h5.55l-.2-1h-5.15zM5 16h5v-2H5zm0-3h5v-2H5zm0-3h5V8H5zm9 0V8h5v2zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsTwoPagerStoreOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
