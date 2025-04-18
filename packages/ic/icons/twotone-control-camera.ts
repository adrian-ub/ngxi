import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneControlCameraIcon],svg[ic-twotone-control-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.3 13.77L5.54 12l1.76-1.77l-1.76-1.77L2 12l3.54 3.54zm8.24 4.69l-1.77-1.76L12 18.46l-1.77-1.76l-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54l-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76l1.77-1.76L12 2L8.46 5.54l1.77 1.76z"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneControlCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
