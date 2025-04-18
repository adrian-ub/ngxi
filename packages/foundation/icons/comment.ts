import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationCommentIcon],svg[foundation-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.466 16.936a3.36 3.36 0 0 0-3.34-3.036H14.781v.009a3.356 3.356 0 0 0-3.247 3.027H11.5v56.342h.068a3.37 3.37 0 0 0 3.214 2.694v.009h11.564v6.744a3.373 3.373 0 0 0 6.172 1.884l8.629-8.629h43.979a3.37 3.37 0 0 0 3.306-2.703h.068V16.936z"></svg:path>`,
})
export class FoundationCommentIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
