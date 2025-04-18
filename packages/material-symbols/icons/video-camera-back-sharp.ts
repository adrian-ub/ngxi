import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraBackSharpIcon],svg[material-symbols-video-camera-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h10l-3.45-4.5l-2.3 3l-1.55-2zm-3 4V4h16v6.5l4-4v11l-4-4V20z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraBackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
