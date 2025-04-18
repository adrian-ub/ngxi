import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoFrameSharpIcon],svg[material-symbols-photo-frame-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-2H1V4h22v15h-4v2zm0-6h14l-4.5-6l-3.5 4.5l-2.5-3z"></svg:path>`,
})
export class MaterialSymbolsPhotoFrameSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
