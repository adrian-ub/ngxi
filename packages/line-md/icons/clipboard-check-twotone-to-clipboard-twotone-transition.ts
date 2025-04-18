import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardCheckTwotoneToClipboardTwotoneTransitionIcon],svg[line-md-clipboard-check-twotone-to-clipboard-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3h7v18h-14v-18h7Z"></svg:path><svg:path d="M14.5 3.5v3h-5v-3"></svg:path><svg:path stroke-dasharray="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;10"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity=".3" d="M6 4H10V6H14V4H18V20H6V4Z"></svg:path>`,
})
export class LineMdClipboardCheckTwotoneToClipboardTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
