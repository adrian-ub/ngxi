import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClipboardcleanerIcon],svg[arcticons-clipboardcleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 4.5L30.91 17.09m0 0c3.03 3.03 4.213 6.91 2.356 11.198c-1.747 4.034-6.52 15.212-6.52 15.212s-7.708-.515-14.72-7.526S4.5 21.254 4.5 21.254s11.178-4.773 15.212-6.52c4.288-1.857 8.169-.674 11.199 2.356m-12.752-1.685L32.504 29.75"></svg:path>`,
})
export class ArcticonsClipboardcleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
