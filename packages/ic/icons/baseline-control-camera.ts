import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineControlCameraIcon],svg[ic-baseline-control-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2zm2.92 10l-1.76-1.77L18.46 12l-1.76-1.77l1.76-1.77L22 12zm-10 2.92l1.77-1.76L12 18.46l1.77-1.76l1.77 1.76L12 22zm-2.92-10l1.76 1.77L5.54 12l1.76 1.77l-1.76 1.77L2 12z"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class IcBaselineControlCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
