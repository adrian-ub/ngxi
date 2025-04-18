import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLuminaWallsIcon],svg[arcticons-lumina-walls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.89 28.855c.247-3.15 2.528-4.554 5.11-4.554h.824c4.193.013 8.39-.043 12.583 0h0l-.001 7.848a10.24 10.24 0 0 1-10.262 10.262H15.762A10.24 10.24 0 0 1 5.5 32.15V5.655h8.106A10.24 10.24 0 0 1 23.87 15.917V28.31c0 3.557 2.396 5.13 5.13 5.13h13.01"></svg:path><svg:path d="M25.06 42.411A10.24 10.24 0 0 1 14.8 32.15V18.617c0-2.132-1.692-3.848-3.823-3.848H5.5"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M36.916 5.589A10.24 10.24 0 0 0 26.655 15.85v5.754h5.583A10.24 10.24 0 0 0 42.5 11.343V5.59z"></svg:path><svg:path d="M29.106 21.605a10.24 10.24 0 0 0 10.262-10.262V5.59"></svg:path></svg:g>`,
})
export class ArcticonsLuminaWallsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
