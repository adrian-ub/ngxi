import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableOfContentsIcon],svg[carbon-table-of-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zM26 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class CarbonTableOfContentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
