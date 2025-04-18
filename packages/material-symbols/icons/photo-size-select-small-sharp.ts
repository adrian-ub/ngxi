import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoSizeSelectSmallSharpIcon],svg[material-symbols-photo-size-select-small-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V11h10v10zm12 0v-2h2v2zM4 19h8l-2.6-3.5L7.5 18l-1.4-1.85zm15-2v-2h2v2zm0-4v-2h2v2zM3 9V7h2v2zm16 0V7h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 5V3h2v2zm18 0h-2V3h2zm-2 16v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsPhotoSizeSelectSmallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
