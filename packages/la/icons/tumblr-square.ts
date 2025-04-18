import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTumblrSquareIcon],svg[la-tumblr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 3c0 1.657-.895 3-2 3v2h1v3.365A3.635 3.635 0 0 0 17.635 22a3.18 3.18 0 0 0 2.369-.9l-.717-2.114l-.853.38A1.02 1.02 0 0 1 17 18.433V15h2v-2h-2v-3z"></svg:path>`,
})
export class LaTumblrSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
