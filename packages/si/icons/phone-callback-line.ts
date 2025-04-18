import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPhoneCallbackLineIcon],svg[si-phone-callback-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.172 5.586v4.242m0 0h4.242m-4.242 0l5.656-5.656M7.181 10.269l6.503 6.462c.697-.808 5.11-5.539 7.316.923c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhoneCallbackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
