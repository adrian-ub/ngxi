import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFantasticonIcon],svg[vscode-icons-file-type-fantasticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 3.27A1.27 1.27 0 0 0 28.73 2H3.27A1.27 1.27 0 0 0 2 3.27v25.46A1.27 1.27 0 0 0 3.27 30h25.46A1.27 1.27 0 0 0 30 28.73z"></svg:path><svg:circle cx="15.92" cy="8.75" r="1.87" fill="#21ffc9"></svg:circle><svg:circle cx="8.38" cy="16" r="1.87" fill="#fff"></svg:circle><svg:circle cx="15.92" cy="23.3" r="1.87" fill="#f37"></svg:circle><svg:path fill="#f37" d="M6.51 6.87h3.75v3.75H6.51z"></svg:path><svg:path fill="#21ffc9" d="M21.59 14.15h3.75v3.75h-3.75z"></svg:path><svg:path fill="#fff" d="M21.59 21.42h3.75v3.75h-3.75zm-7.79-3.56l2.13-3.75l2.14 3.75Z"></svg:path><svg:path fill="#f37" d="m21.34 10.62l2.13-3.75l2.13 3.75Z"></svg:path><svg:path fill="#21ffc9" d="m6.25 25.17l2.13-3.75l2.14 3.75Z"></svg:path>`,
})
export class VscodeIconsFileTypeFantasticonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
