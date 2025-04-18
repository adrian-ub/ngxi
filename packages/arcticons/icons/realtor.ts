import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRealtorIcon],svg[arcticons-realtor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.1 6L5.5 25H11v17h26V25h5.5zm-2.754 14.413v15m0-15h-2.183m-.647 15h5.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.346 26.073a5.66 5.66 0 0 1 5.66-5.66h0c1.438 0 2.028.287 2.478 1.36"></svg:path>`,
})
export class ArcticonsRealtorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
