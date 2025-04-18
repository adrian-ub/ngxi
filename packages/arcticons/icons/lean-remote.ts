import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeanRemoteIcon],svg[arcticons-lean-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.311 13.452a13.95 13.95 0 0 1 4.697 10.507h0c-.002 7.545-5.825 13.66-13.008 13.66s-13.004-6.113-13.008-13.657a13.96 13.96 0 0 1 4.52-10.356M24 8.929v16.644"></svg:path>`,
})
export class ArcticonsLeanRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
