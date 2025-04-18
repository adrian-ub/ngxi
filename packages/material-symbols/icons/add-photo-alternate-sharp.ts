import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddPhotoAlternateSharpIcon],svg[material-symbols-add-photo-alternate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h11q-.5.65-.75 1.425T13 6q0 2.075 1.463 3.538T18 11q.8 0 1.575-.25T21 10v11zm3-4h12l-3.75-5l-3 4L9 13zm11-8V7h-2V5h2V3h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddPhotoAlternateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
