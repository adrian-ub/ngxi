import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserAnonymousIcon],svg[ooui-user-anonymous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H5L4 8h12zM0 10s2 1 10 1s10-1 10-1l-4-2H4zm8 4h4v1H8z"></svg:path><svg:circle cx="6" cy="15" r="3" fill="currentColor"></svg:circle><svg:circle cx="14" cy="15" r="3" fill="currentColor"></svg:circle>`,
})
export class OouiUserAnonymousIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
