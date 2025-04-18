import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTestTube2Icon],svg[si-glyph-test-tube-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.726.04L8.32 1.443l.703.703l-8.48 8.323c-.738.735-.674 1.996.143 2.811l2.031 2.025c.816.814 2.047.91 2.785.173l8.514-8.353l.684.684l1.408-1.404zm-6.37 14.358l-1.771-1.771c-.502-.501-.591-1.232-.195-1.623l8.35-8.225l3.59 3.592l-8.351 8.222c-.395.395-1.123.305-1.623-.195"></svg:path><svg:path d="M5.273 12.78c-.34.336-.904.316-1.406-.184l-.376-.377c-.503-.504-.636-1.184-.298-1.518l3.858-3.858l3.203.909z"></svg:path></svg:g>`,
})
export class SiGlyphTestTube2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
