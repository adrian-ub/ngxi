import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplyMinimalIconPackIcon],svg[arcticons-simply-minimal-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.676 16.21a13.05 13.05 0 0 1 10.494-5.279c7.218 0 14.13 4.919 14.13 15.739c0 10.54-4.918 18.83-16.3 18.83"></svg:path>`,
})
export class ArcticonsSimplyMinimalIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
