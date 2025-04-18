import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabletAndroidOutlineSharpIcon],svg[material-symbols-tablet-android-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23V1h18v22zm2-5v3h14v-3zm5 2h4v-1h-4zm-5-4h14V6H5zM5 4h14V3H5zm0 0V3zm0 14v3z"></svg:path>`,
})
export class MaterialSymbolsTabletAndroidOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
