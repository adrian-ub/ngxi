import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMicrophone2Icon],svg[si-glyph-microphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.984 7.031l-.04-2.007h-.936l.04 4.629c0 1.928-1.988 3.409-4.529 3.409s-4.535-1.481-4.535-3.409V5.031H3.01v1.985h-.995v.922h.995v2.111c0 1.698 1.741 3.25 3.989 3.75V16h2.979v-2.188c2.275-.485 4.005-2.048 4.005-3.762V7.953h1v-.922z"></svg:path><svg:path d="M8.495 10.953c1.914 0 3.468-.869 3.468-1.94V7.016H5.025v1.997c0 1.071 1.554 1.94 3.47 1.94m3.484-7.525C11.979 2.086 10.421 1 8.5 1S5.021 2.086 5.021 3.428V5.99h6.957z"></svg:path></svg:g>`,
})
export class SiGlyphMicrophone2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
