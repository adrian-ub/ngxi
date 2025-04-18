import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVpnConnectionIcon],svg[streamline-vpn-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.283 5.076c.465-.31 1.857-.929 3.715-.929s3.25.619 3.714.929M4.63 7.063c.395-.198 1.42-.592 2.368-.592c.946 0 1.972.394 2.367.592M6.222 9.08c.13-.066.466-.195.776-.195s.646.13.775.194"></svg:path><svg:path stroke-miterlimit="10" d="M7.377 13.43c-.189.094-.471.094-.754 0C2.95 12.013.5 8.426.5 4.463V1.538C.5.972.971.5 1.536.5h10.928c.565 0 1.036.472 1.036 1.038v2.926c0 4.058-2.45 7.55-6.123 8.965Z"></svg:path></svg:g>`,
})
export class StreamlineVpnConnectionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
