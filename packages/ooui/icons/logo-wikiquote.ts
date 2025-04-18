import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogoWikiquoteIcon],svg[ooui-logo-wikiquote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5.35" cy="9.93" r="3.35" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9.133 4.643a6.52 6.52 0 0 1 2.79 5.354a6.52 6.52 0 0 1-2.672 5.269l-.12.086l-.923-1.322a4.91 4.91 0 0 0 2.103-4.033c0-1.578-.748-3.03-1.988-3.95l-.114-.082zM13.874 0a13.08 13.08 0 0 1 4.627 9.997c0 3.86-1.678 7.448-4.538 9.92l-.096.083l-1.15-1.357a11.3 11.3 0 0 0 4.006-8.646c0-3.33-1.444-6.424-3.908-8.562l-.091-.079L13.873 0Z"></svg:path><svg:path fill="currentColor" d="M11.453 2.386a9.71 9.71 0 0 1 3.668 7.611a9.71 9.71 0 0 1-3.576 7.537l-.09.073l-1.074-1.347A7.99 7.99 0 0 0 13.4 9.997a7.99 7.99 0 0 0-2.932-6.194l-.087-.07l1.073-1.347Z"></svg:path>`,
})
export class OouiLogoWikiquoteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
