import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCodeIcon],svg[gg-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.953 16.912l-1.36 1.449l-6.562-6.16L8.19 5.64l1.458 1.369l-4.79 5.104l5.094 4.781zm4.094 0l1.36 1.449l6.562-6.16L15.81 5.64l-1.458 1.369l4.79 5.104l-5.094 4.781z"></svg:path>`,
})
export class GgCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
