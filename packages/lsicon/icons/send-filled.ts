import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSendFilledIcon],svg[lsicon-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lsiconSendFilled0" d="M12.97 2.67a.5.5 0 0 0-.64-.64l-11 4a.5.5 0 0 0-.016.934l4.433 1.773l2.9-3.09l.707.707l-2.98 3.176l1.662 4.156a.5.5 0 0 0 .934-.015z"></svg:path></svg:defs><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:use href="#lsiconSendFilled0"></svg:use><svg:use href="#lsiconSendFilled0"></svg:use></svg:g>`,
})
export class LsiconSendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
