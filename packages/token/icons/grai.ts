import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGraiIcon],svg[token-grai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.642 14.369a5.213 5.213 0 0 1-6.519 2.494a5.2 5.2 0 0 1-2.064-1.452a1.54 1.54 0 0 0-1.137-.569c-.933 0-1.554.948-.995 1.691A7.579 7.579 0 0 0 19.2 14.37h.853a.947.947 0 1 0 0-1.895h-4.264a.947.947 0 1 0 0 1.895zm.436-5.21c-.44 0-.848-.233-1.137-.57a5.21 5.21 0 0 0-8.583 1.043h.853a.947.947 0 1 1 0 1.895H3.947a.947.947 0 1 1 0-1.895H4.8a7.579 7.579 0 0 1 13.273-2.165c.559.744-.057 1.691-.995 1.691"></svg:path>`,
})
export class TokenGraiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
