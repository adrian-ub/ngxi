import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNewspaperLtrIcon],svg[ooui-newspaper-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a2 2 0 0 0-2 2v12a1 1 0 0 1-1-1V5h-.5A1.5 1.5 0 0 0 0 6.5v10A1.5 1.5 0 0 0 1.5 18H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2h11v4H6zm0 6h6v1H6zm0 2h6v1H6zm0 2h6v1H6zm7-4h4v5h-4z"></svg:path>`,
})
export class OouiNewspaperLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
