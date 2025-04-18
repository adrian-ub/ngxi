import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStoreIcon],svg[si-glyph-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.021 7.028v5.014H4V7h-.965v8H15V7.028zM4 0h9.902v.929H4zm10.295 3.001l-.311-.955H4.021l-.336.955l-2.674 3.301l1.334.668h1.634V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.657l1.291-.668z"></svg:path>`,
})
export class SiGlyphStoreIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
