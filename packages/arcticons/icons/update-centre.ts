import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUpdateCentreIcon],svg[arcticons-update-centre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.763 28.871a1.96 1.96 0 1 1 1.943-1.88a1.944 1.944 0 0 1-1.943 1.88m11.345 0a1.96 1.96 0 1 1 1.943-1.88a1.944 1.944 0 0 1-1.943 1.88"></svg:path><svg:path d="M24.403 16.873c7.674 0 13.895 6.22 13.895 13.894h0a1.976 1.976 0 0 1-1.976 1.976H12.42a1.976 1.976 0 0 1-1.976-1.976h0c0-7.674 6.22-13.894 13.894-13.894zm-11.982-2.072l3.951 4.637m20.045-4.637l-3.935 4.637"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M44.129 26.458c-1.22 10.043-9.746 17.595-19.863 17.596S5.623 36.504 4.4 26.461"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 29.968l1.83-3.843l3.232 2.716"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M4.1 22.521c.727-10.09 8.87-18.053 18.975-18.55c10.105-.499 18.992 6.624 20.706 16.595"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m45.5 16.829l-1.639 3.928l-3.361-2.553"></svg:path>`,
})
export class ArcticonsUpdateCentreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
