import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoFrameSharpIcon],svg[material-symbols-light-photo-frame-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.846 19.423V18H2V5h20v13h-2.846v1.423zM6.404 14.5h11.212l-3.5-4.673l-3.116 4l-2.096-2.539z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoFrameSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
