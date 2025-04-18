import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJoystick05Icon],svg[hugeicons-joystick-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 5.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M17.743 22H6.257c-.239 0-.358 0-.458-.01A2 2 0 0 1 4.01 20.2C4 20.1 4 19.98 4 19.742c0-.145 0-.218.003-.288a3 3 0 0 1 .675-1.76a6 6 0 0 1 .19-.216l1.344-1.493c.88-.978 1.32-1.467 1.904-1.727C8.698 14 9.356 14 10.672 14h2.656c1.316 0 1.974 0 2.556.26c.583.259 1.023.748 1.904 1.726l1.343 1.493c.097.108.146.162.19.217a3 3 0 0 1 .676 1.759c.003.07.003.143.003.288c0 .239 0 .358-.01.458a2 2 0 0 1-1.79 1.789c-.1.01-.22.01-.458.01M10 19h4M12 9v7" color="currentColor"></svg:path>`,
})
export class HugeiconsJoystick05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
