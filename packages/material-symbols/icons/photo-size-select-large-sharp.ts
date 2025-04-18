import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoSizeSelectLargeSharpIcon],svg[material-symbols-photo-size-select-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7h14v14zm2-3h10l-3.4-4.5L9 17l-1.6-2.15zm14-1v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 5V3h2v2zm18 0h-2V3h2zm-2 16v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsPhotoSizeSelectLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
