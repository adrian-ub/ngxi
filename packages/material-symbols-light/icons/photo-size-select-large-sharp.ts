import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoSizeSelectLargeSharpIcon],svg[material-symbols-light-photo-size-select-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V7.77h12.23V20zm2-2h8.23l-2.784-3.692l-2.138 2.884l-1.331-1.765zm13-.808v-2h1v2zM19 13v-2h1v2zm0-4.192v-2h1v2zM7 5V4h2v1zm4 0V4h2v1zm4 0V4h2v1zM4 5V4h1v1zm16 0h-1V4h1zm-1 15v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoSizeSelectLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
