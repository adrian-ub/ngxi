import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserAddRtlIcon],svg[ooui-user-add-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.5" cy="10.5" r="3.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 0v4h4v2H6v4H4V6H0V4h4V0zm6 15c4.6 0 7 2.69 7 4.23V20H5v-.77C5 17.69 7.4 15 12 15"></svg:path>`,
})
export class OouiUserAddRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
