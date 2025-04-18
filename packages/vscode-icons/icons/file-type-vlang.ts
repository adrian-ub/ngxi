import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeVlangIcon],svg[vscode-icons-file-type-vlang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#536b8a" d="m20.467 29.288l9.485-26.375a.5.5 0 0 0-.566-.728l-7.459.715a1.46 1.46 0 0 0-1.141.9l-8.779 25.206a.573.573 0 0 0 .578.813h7.26a.66.66 0 0 0 .577-.4Z"></svg:path><svg:path fill="#5d87bf" d="m2.614 2.185l7.459.719a1.47 1.47 0 0 1 1.142.9l8.965 25.609a.286.286 0 0 1-.289.406h-7.306a1.31 1.31 0 0 1-1.152-.81L2.048 2.913a.5.5 0 0 1 .566-.728"></svg:path>`,
})
export class VscodeIconsFileTypeVlangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
