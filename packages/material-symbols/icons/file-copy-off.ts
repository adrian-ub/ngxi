import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyOffIcon],svg[material-symbols-file-copy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.15l-15-15V3q0-.825.588-1.412T8 1h7l6 6zm-.5 5.15L16.2 19H8q-.825 0-1.412-.587T6 17V8.8L.7 3.5l1.4-1.4l19.8 19.8zM14 8h5.5L14 2.5L19.5 8L14 2.5zM4 23q-.825 0-1.412-.587T2 21V8h2v13h12v2z"></svg:path>`,
})
export class MaterialSymbolsFileCopyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
