import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFactoIcon],svg[ps-facto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M333 272L370 6h92l-70 266zm20 39q-22 0-37 15t-15 36q0 22 15 37t37 15t37-15t15-37q0-21-15-36t-37-15m-243-27h158l16-64H123l27-139h174l16-77H78L2 407h84z"></svg:path>`,
})
export class PsFactoIcon {
  readonly viewBox = input("0 0 464 464")
  readonly width = input("1em")
  readonly height = input("1em")
}
