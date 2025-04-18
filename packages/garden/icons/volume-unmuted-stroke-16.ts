import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVolumeUnmutedStroke16Icon],svg[garden-volume-unmuted-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m4.5 10.5l4.1 4.1c.4.4.9.1.9-.3V1.7c0-.4-.5-.7-.9-.3L4.5 5.5H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5zm7.3-.7c.5-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8m2.1 5.6c1-1 1.6-2.3 1.6-3.8s-.6-2.9-1.6-3.9"></svg:path>`,
})
export class GardenVolumeUnmutedStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
