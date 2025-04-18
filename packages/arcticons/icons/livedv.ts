import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLivedvIcon],svg[arcticons-livedv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.992" cy="12.863" r="4.803" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.51 11.223h-8.813l9.781 8.76l-5.794 4.262l19.08 15.695h6.597s.966-1.368-2.201-3.813s-12.954-10.499-12.954-10.499l5.943-4.633ZM11.111 22.965l-6.535.05a1.99 1.99 0 0 0 .543 1.936L16.763 35.07l5.07-3.248Z"></svg:path>`,
})
export class ArcticonsLivedvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
