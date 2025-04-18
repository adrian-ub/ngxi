import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraFrontOutlineSharpIcon],svg[material-symbols-video-camera-front-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45zm4-4q.825 0 1.413-.587T12 10t-.587-1.412T10 8t-1.412.588T8 10t.588 1.413T10 12m-8 8V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraFrontOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
