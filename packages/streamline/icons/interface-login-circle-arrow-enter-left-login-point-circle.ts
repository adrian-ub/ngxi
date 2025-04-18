import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginCircleArrowEnterLeftLoginPointCircleIcon],svg[streamline-interface-login-circle-arrow-enter-left-login-point-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7h-8m2-2l-2 2l2 2"></svg:path><svg:path d="M12.48 10.5a6.5 6.5 0 1 1 0-7"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLoginCircleArrowEnterLeftLoginPointCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
