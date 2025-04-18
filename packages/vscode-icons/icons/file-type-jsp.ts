import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJspIcon],svg[vscode-icons-file-type-jsp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fdb940" d="m29.192 2.5l-6.917 7.492a24.85 24.85 0 0 1-5.091 14.754l6.021 1.49C33.243 16.882 29.192 2.5 29.192 2.5"></svg:path><svg:path fill="#feb322" d="M22.275 9.992a22 22 0 0 0-.288-4.337L6.726 22.194l10.436 2.585c.011-.011.011-.022.022-.033l-6.939-1.719Z"></svg:path><svg:path fill="#f98200" d="m10.256 23.027l6.944 1.719a24.83 24.83 0 0 0 5.086-14.754Z"></svg:path><svg:path fill="#1b208b" d="M19.907 26.466c.608 0 1.2.033 1.782.077L2 21.745s3.663 1.2 8.09 7.755a15.94 15.94 0 0 1 9.817-3.034"></svg:path>`,
})
export class VscodeIconsFileTypeJspIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
