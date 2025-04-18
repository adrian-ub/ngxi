import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCameraRearIcon],svg[ic-outline-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v2h5v2l3-3l-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7V2h10zm-5-9c1.1 0 2-.9 1.99-2c0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2"></svg:path>`,
})
export class IcOutlineCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
