import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeIcon],svg[file-icons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M322.481 29.346L512 482.654V29.346zM0 29.346v453.308L189.519 29.346zm256.32 166.896l120.797 286.412h-79.18L261.87 391.31H173.3z"></svg:path>`,
})
export class FileIconsAdobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
