import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteVolumeMuteOutlineIcon],svg[flowbite-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A5 5 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.97 8.97 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4l14 14"></svg:path>`,
})
export class FlowbiteVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
