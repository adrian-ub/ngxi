import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNewTabIcon],svg[carbon-new-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="carbonNewTab0" fill="currentColor" d="M26 26H6V6h10V4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V16h-2Z"></svg:path></svg:defs><svg:use href="#carbonNewTab0"></svg:use><svg:use href="#carbonNewTab0"></svg:use><svg:path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonNewTabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
