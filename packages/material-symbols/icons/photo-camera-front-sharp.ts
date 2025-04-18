import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoCameraFrontSharpIcon],svg[material-symbols-photo-camera-front-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V5h5.15L9 3h6l1.85 2H22v16zm6-4h8v-.55q0-1.125-1.1-1.787T12 14t-2.9.663T8 16.45zm4-4q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13"></svg:path>`,
})
export class MaterialSymbolsPhotoCameraFrontSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
