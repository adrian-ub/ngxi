import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCommentBankIcon],svg[ic-sharp-comment-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20l4-4h16V2zm17 11l-2.5-1.5L14 13V5h5z"></svg:path>`,
})
export class IcSharpCommentBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
