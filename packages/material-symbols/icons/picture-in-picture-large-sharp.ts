import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureLargeSharpIcon],svg[material-symbols-picture-in-picture-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16V6h12v10zm-4 4v-2h18V4h2v16z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
