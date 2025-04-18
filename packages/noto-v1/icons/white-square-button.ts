import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WhiteSquareButtonIcon],svg[noto-v1-white-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="M127.56 113.88c0 7.53-6.16 13.69-13.69 13.69H14.12c-7.53 0-13.69-6.16-13.69-13.69V14.12C.43 6.59 6.59.43 14.12.43h99.75c7.53 0 13.69 6.16 13.69 13.69z"></svg:path><svg:path fill="#424242" d="M108.17 100.02c0 4.73-3.87 8.6-8.6 8.6H27.6c-4.73 0-8.6-3.87-8.6-8.6V28.05c0-4.73 3.87-8.6 8.6-8.6h71.97c4.73 0 8.6 3.87 8.6 8.6z"></svg:path>`,
})
export class NotoV1WhiteSquareButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
