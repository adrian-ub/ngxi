import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCommentSquareIcon],svg[cil-comment-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 496h-47.229l-69.522-128H40a24.03 24.03 0 0 1-24-24V40a24.03 24.03 0 0 1 24-24h432a24.03 24.03 0 0 1 24 24ZM48 336h350.284L464 456.993V48H48Z"></svg:path>`,
})
export class CilCommentSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
