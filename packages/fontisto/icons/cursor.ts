import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCursorIcon],svg[fontisto-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l13.5 12l-5.04 2.24L12 22.5L9 24l-3.593-8.4L0 18z"></svg:path>`,
})
export class FontistoCursorIcon {
  readonly viewBox = input("0 0 14 24")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
