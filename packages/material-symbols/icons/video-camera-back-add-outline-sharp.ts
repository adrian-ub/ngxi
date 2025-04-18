import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraBackAddOutlineSharpIcon],svg[material-symbols-video-camera-back-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-8h2v6h12V6h-6V4h8v6.5l4-4v11l-4-4V20zm3-4h10l-3.375-4.5L9 15l-1.625-2.175zm-1-6V8H2V6h2V4h2v2h2v2H6v2z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraBackAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
