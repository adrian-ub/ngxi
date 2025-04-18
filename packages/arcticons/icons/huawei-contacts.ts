import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiContactsIcon],svg[arcticons-huawei-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.712" height="30.958" x="9.788" y="8.521" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.051"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.288h9.695M4.5 31.106h9.695"></svg:path><svg:circle cx="27.553" cy="20.061" r="6.481" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.605 36.173l-9.912-9.633l-10.028 9.633"></svg:path>`,
})
export class ArcticonsHuaweiContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
