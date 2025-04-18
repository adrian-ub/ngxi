import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInteractiveWallpapersIcon],svg[arcticons-interactive-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.446 12.294L15.064 33.74a1.966 1.966 0 0 0 1.703 2.95H41.53a1.966 1.966 0 0 0 1.703-2.95L30.852 12.294a1.966 1.966 0 0 0-3.406 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.976 23.5l-3.446-5.97a1.966 1.966 0 0 0-3.406 0L4.766 33.74a1.966 1.966 0 0 0 1.703 2.95h10.298m.156-6.17h7.515m-4.104-5.909h8.073m8.508-1.816a4.576 4.576 0 1 0-4.027-6.971"></svg:path>`,
})
export class ArcticonsInteractiveWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
