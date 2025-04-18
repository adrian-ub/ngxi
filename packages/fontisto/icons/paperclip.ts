import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPaperclipIcon],svg[fontisto-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.818 0a5.455 5.455 0 0 0-5.455 5.455v9.818a3.273 3.273 0 1 0 6.546 0V9.608a1.092 1.092 0 0 0-2.182-.002v5.698a1.091 1.091 0 0 1-2.182 0v-.032v.002v-9.818a3.273 3.273 0 1 1 6.546 0v10.906a5.455 5.455 0 0 1-10.91 0V5.425a1.091 1.091 0 0 0-2.182 0v.032v-.002v10.906a7.636 7.636 0 0 0 15.272 0V5.455A5.46 5.46 0 0 0 9.816 0z"></svg:path>`,
})
export class FontistoPaperclipIcon {
  readonly viewBox = input("0 0 15 24")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
