import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFrontcommerceIcon],svg[vscode-icons-file-type-frontcommerce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ac304f"><svg:path d="m22.07 12.489l6.086-3.498L16 1.994L3.845 8.99v13.996l6.092 3.507l-.007-7.015L16 22.974V15.99l-6.07-3.5L16 8.994z"></svg:path><svg:path d="m22.07 19.466l6.086 3.52L16 30.006v-7.033z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeFrontcommerceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
