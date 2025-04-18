import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneCameraRearIcon],svg[ic-twotone-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16h10V2H7zm4.99-13c1.1 0 2 .9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-.9-2-2s.89-2 1.99-2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 20v2h5v2l3-3l-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-2 14H7V2h10zm-5-9c1.1 0 2-.9 1.99-2c0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2"></svg:path>`,
})
export class IcTwotoneCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
