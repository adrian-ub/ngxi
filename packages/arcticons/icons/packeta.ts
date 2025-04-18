import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPacketaIcon],svg[arcticons-packeta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.943 12.16l2.249 17.286l14.93 13.541l15.195-13.961l1.74-17.35l-16.688-6.663z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.549 14.186l1.46 13.57L23.96 38.33l12.296-10.778l1.511-13.743l-14.145-5.733l-2.99 1.393l12.848 6.338l-.184 8.868l-3.42 1.816l-.02-8.309l-14.013-6.998z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.807 14.225l13.566 7.386l4.95-2.91m-5.339 2.682l-.004 16.51m9.558-22.166l4.073-1.972"></svg:path>`,
})
export class ArcticonsPacketaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
