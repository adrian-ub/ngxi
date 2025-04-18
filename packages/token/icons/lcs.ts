import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLcsIcon],svg[token-lcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="tokenLcs0" fill="currentColor" d="M7.6 8.52a.86.86 0 0 1 1.378 0l4.43 5.951a.853.853 0 0 1-.53 1.347a.6.6 0 0 1-.308-.043l-2.424-.934a5.17 5.17 0 0 0-3.714 0l-2.424.934a.6.6 0 0 1-.309.043a.853.853 0 0 1-.529-1.347z"></svg:path></svg:defs><svg:use href="#tokenLcs0"></svg:use><svg:use href="#tokenLcs0"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="m13.207 14.202l.2.27a.853.853 0 0 1-.529 1.347a.6.6 0 0 1-.308-.044l-2.424-.934a5.17 5.17 0 0 0-3.303-.138l-.029-.013c1.74-.657 5.412-1.678 6.261-.64q.07.084.132.152" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.022 15.48a.86.86 0 0 0 1.378 0l4.43-5.952a.853.853 0 0 0-.529-1.347a.6.6 0 0 0-.31.044l-2.423.933a5.17 5.17 0 0 1-3.714 0l-2.423-.933a.6.6 0 0 0-.309-.044a.853.853 0 0 0-.53 1.347z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m20.63 9.798l.2-.27a.853.853 0 0 0-.53-1.347a.6.6 0 0 0-.309.044l-2.423.933a5.17 5.17 0 0 1-3.303.139l-.029.013c1.74.657 5.412 1.677 6.261.64q.07-.084.132-.152" clip-rule="evenodd"></svg:path>`,
})
export class TokenLcsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
