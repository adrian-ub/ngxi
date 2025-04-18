import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInsertPageIcon],svg[carbon-insert-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-2V20H12v10h-2V20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM5.17 16L2 19.17l1.411 1.419L8 16l-4.58-4.58L2 12.83zM24 14H12a2 2 0 0 1-2-2V2h2v10h12V2h2v10a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonInsertPageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
