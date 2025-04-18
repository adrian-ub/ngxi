import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVivoAppstoreIcon],svg[arcticons-vivo-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="37" height="37" x="5.5" y="5.5" rx="5.34" ry="5.34"></svg:rect><svg:path d="M32.343 11.785a8.637 8.637 0 0 1-16.686 0m-9.85 21.852s8.218-4.807 17.182-.747c12.475 5.652 19.498-1.172 19.498-1.172"></svg:path></svg:g>`,
})
export class ArcticonsVivoAppstoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
