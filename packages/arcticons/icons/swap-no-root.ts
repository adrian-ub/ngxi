import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwapNoRootIcon],svg[arcticons-swap-no-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="26" height="26" x="11" y="10.998" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="9" height="9" x="19.5" y="19.498" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.5 11V5.5m0 37V37m-11-26V5.5m0 37V37M37 29.5h5.5m-37 0H11m26-11h5.5m-37 0H11"></svg:path>`,
})
export class ArcticonsSwapNoRootIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
