import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyOffOutlineSharpIcon],svg[material-symbols-file-copy-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.15l-2-2V8h-5V3H8v2.15l-2-2V1h9l6 6zM8 17h6.2L8 10.8zm12.5 6.3L16.2 19H6V8.8L.7 3.5l1.4-1.4l19.8 19.8zM2 23V8h2v13h12v2z"></svg:path>`,
})
export class MaterialSymbolsFileCopyOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
