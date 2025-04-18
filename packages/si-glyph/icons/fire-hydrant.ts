import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFireHydrantIcon],svg[si-glyph-fire-hydrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 14.047h-.326c-.371 0-.674.457-.674 1.019v.893h7.987v-.893c0-.563-.303-1.019-.674-1.019h-.357V6H5zM4 4v.942L12 5V4zm3-2.858c-1.148.27-1.969.993-1.969 1.842h5.938c0-.854-.83-1.58-1.988-1.847V0H7zM3 8V7h.947v1h.027v.97h-.027v.938H3V8.97H2V8zm9.953.938v.968H12V7h.953v1h.989v.938z"></svg:path>`,
})
export class SiGlyphFireHydrantIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
