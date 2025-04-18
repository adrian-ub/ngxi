import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAddCommentIcon],svg[ic-sharp-add-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v16h16l4 4zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4z"></svg:path>`,
})
export class IcSharpAddCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
