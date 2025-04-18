import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedShidoIcon],svg[token-branded-shido-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedShido0)" d="M14.27 5.25A2.26 2.26 0 0 1 12 7.5a2.26 2.26 0 0 1-2.271-2.25A2.26 2.26 0 0 1 11.999 3a2.26 2.26 0 0 1 2.272 2.25m-5.976 5.691v1.705l2.33 1.472l1.376-.9zm7.412 0v1.705l-2.33 1.472l-1.376-.9zm-2.404-3.51a2.53 2.53 0 0 0 1.191-2.726l5.448 3.033v2.933l-2.647 1.419V9.65l-3.992-2.224zm3.992 6.094l2.647-1.446v4.5L12 21l-7.941-4.42v-4.516l2.647 1.445v2.027L12 18.476l5.294-2.939zM4.059 7.738v2.912l2.647 1.424V9.65l3.991-2.223a2.525 2.525 0 0 1-1.19-2.721z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedShido0" x1="19.941" x2="7.187" y1="8.241" y2="17.172" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#009CFF"></svg:stop><svg:stop offset="1" stop-color="#0070FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedShidoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
