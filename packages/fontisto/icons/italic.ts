import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoItalicIcon],svg[fontisto-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.182 0H5.423a1.091 1.091 0 0 0 0 2.182h.032h-.002h3.033L4.559 21.819h-3.5a1.091 1.091 0 0 0 0 2.182h.032h-.002h8.727a1.092 1.092 0 0 0 .002-2.182H6.783L10.71 2.182h3.469A1.092 1.092 0 0 0 14.181 0h-.002z"></svg:path>`,
})
export class FontistoItalicIcon {
  readonly viewBox = input("0 0 15 24")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
