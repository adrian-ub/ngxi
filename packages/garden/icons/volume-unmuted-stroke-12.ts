import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVolumeUnmutedStroke12Icon],svg[garden-volume-unmuted-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m3 7.5l2.6 2.6c.3.3.9.1.9-.3V2.2c0-.4-.5-.7-.9-.3L3 4.5H1c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5zm5.8-.2c.4-.3.7-.8.7-1.3s-.3-1-.7-1.3m1.6 4.1c.7-.7 1.1-1.7 1.1-2.8s-.5-2.1-1.2-2.9"></svg:path>`,
})
export class GardenVolumeUnmutedStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
