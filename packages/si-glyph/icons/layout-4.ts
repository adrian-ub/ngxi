import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout4Icon],svg[si-glyph-layout-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.956 6.326c0 .35-.299.632-.669.632H1.689c-.371 0-.67-.282-.67-.632V.633c0-.35.299-.633.67-.633h8.598c.37 0 .669.283.669.633zM17 15.333a.67.67 0 0 1-.671.667H7.714a.67.67 0 0 1-.671-.667V8.666c0-.368.3-.666.671-.666h8.615c.37 0 .671.298.671.666zm-11.024 0c0 .369-.3.667-.668.667H1.691a.67.67 0 0 1-.671-.667V8.666c0-.368.299-.666.671-.666h3.617c.368 0 .668.298.668.666zM17 6.345c0 .351-.324.634-.726.634h-3.528c-.398 0-.723-.283-.723-.634V.635c0-.352.324-.635.723-.635h3.528c.401 0 .726.283.726.635z"></svg:path>`,
})
export class SiGlyphLayout4Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
