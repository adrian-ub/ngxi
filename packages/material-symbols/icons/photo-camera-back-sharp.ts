import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoCameraBackSharpIcon],svg[material-symbols-photo-camera-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V5h5.15L9 3h6l1.85 2H22v16zm4-4h12l-3.75-5l-3 4L9 13z"></svg:path>`,
})
export class MaterialSymbolsPhotoCameraBackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
