import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZocdocIcon],svg[arcticons-zocdoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.803 21.203c0 16.038-.9 22.297-9.231 22.297c-9.975 0-22.375-15.1-22.375-25.27c0-7.583 6.147-13.73 13.73-13.73s17.876 5.516 17.876 16.703"></svg:path><svg:circle cx="14.768" cy="23.92" r="1.895" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.313" cy="23.92" r="1.895" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.768 12.324h15.804l-15.4 22.703c5.535 2.6 12.036 2.195 16.788-.27"></svg:path>`,
})
export class ArcticonsZocdocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
