import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSendOutlineIcon],svg[lsicon-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#lsiconSendOutline0)"><svg:path stroke="currentColor" stroke-linejoin="round" d="m6.5 8.5l-5-2l11-4l-4 11zm0 0L9 6"></svg:path></svg:g><svg:defs><svg:clippath id="lsiconSendOutline0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class LsiconSendOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
