import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraBackAddSharpIcon],svg[material-symbols-video-camera-back-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-9q.65.5 1.425.75T5 12q2.075 0 3.538-1.463T10 7q0-.8-.25-1.575T9 4h9v6.5l4-4v11l-4-4V20zm2-10V8H2V6h2V4h2v2h2v2H6v2zm1 6h10l-3.375-4.5L9 15l-1.625-2.175z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraBackAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
