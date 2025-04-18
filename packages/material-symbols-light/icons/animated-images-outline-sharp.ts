import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAnimatedImagesOutlineSharpIcon],svg[material-symbols-light-animated-images-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 12.75l4.789-3.25L12.5 6.25zm4.383 5.712h1.444l.098.825l-13.84 1.742L2.927 8.065l2.612-.254v1L4.1 8.956L5.45 19.9zm-9.344-2V3H21v13.462zm1-1H20V4H8.539zm5.73-5.731"></svg:path>`,
})
export class MaterialSymbolsLightAnimatedImagesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
