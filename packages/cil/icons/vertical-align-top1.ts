import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignTop1Icon],svg[cil-vertical-align-top1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.25 23.25h6V3.75h-6zm1.5-18h3v16.5h-3z" fill="currentColor"></svg:path><svg:path d="M9 16.125h6V3.75H9zM10.5 5.25h3v9.375h-3z" fill="currentColor"></svg:path><svg:path d="M.75 23.25h6V3.75h-6zm1.5-18h3v16.5h-3z" fill="currentColor"></svg:path><svg:path d="M.75.75h22.5v1.5H.75V.75z" fill="currentColor"></svg:path>`,
})
export class CilVerticalAlignTop1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
