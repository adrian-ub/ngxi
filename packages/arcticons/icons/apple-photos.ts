import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApplePhotosIcon],svg[arcticons-apple-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="20" x="17.5" y="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5"></svg:rect><svg:rect width="13" height="20" x="17.5" y="25.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5"></svg:rect><svg:rect width="13" height="20" x="29" y="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(90 35.5 24)"></svg:rect><svg:rect width="13" height="20" x="6" y="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(90 12.5 24)"></svg:rect><svg:rect width="13" height="20" x="25.632" y="5.868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(45 32.132 15.868)"></svg:rect><svg:rect width="13" height="20" x="9.368" y="22.132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(45 15.868 32.132)"></svg:rect><svg:rect width="13" height="20" x="25.632" y="22.132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(135 32.132 32.132)"></svg:rect><svg:rect width="13" height="20" x="9.368" y="5.868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.5" ry="6.5" transform="rotate(135 15.868 15.868)"></svg:rect>`,
})
export class ArcticonsApplePhotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
