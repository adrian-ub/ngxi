import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolRightDirIcon],svg[websymbol-right-dir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M529 501L0 766V236z"></svg:path>`,
})
export class WebsymbolRightDirIcon {
  readonly viewBox = input("0 0 529 1000")
  readonly width = input("0.53em")
  readonly height = input("1em")
}
