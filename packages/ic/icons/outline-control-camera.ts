import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineControlCameraIcon],svg[ic-outline-control-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.54 8.46L2 12l3.54 3.54l1.76-1.77L5.54 12l1.76-1.77zm6.46 10l-1.77-1.76l-1.77 1.76L12 22l3.54-3.54l-1.77-1.76zm6.46-10l-1.76 1.77L18.46 12l-1.76 1.77l1.76 1.77L22 12zm-10-2.92l1.77 1.76L12 5.54l1.77 1.76l1.77-1.76L12 2z"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class IcOutlineControlCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
