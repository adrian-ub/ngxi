import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpModeCommentIcon],svg[ic-sharp-mode-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v16h16l4 4z"></svg:path>`,
})
export class IcSharpModeCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
