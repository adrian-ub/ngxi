import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPickIcon],svg[si-glyph-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.168 5.921c.009.006 1.877 1.889 1.885 1.896l1.314-1.32c3.855 4.404 2.466 7.059 2.615 6.908c1.901-1.899.89-5.99-2.256-9.136S5.488.112 3.591 2.011c-.148.146 2.5-1.271 6.908 2.593zm4.972-4.317l.88.877l-.946.947l-.879-.877z"></svg:path><svg:path d="M8.873 7.166L.289 15.752a.667.667 0 0 0-.009.943a.67.67 0 0 0 .944-.01l8.584-8.584z"></svg:path></svg:g>`,
})
export class SiGlyphPickIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
