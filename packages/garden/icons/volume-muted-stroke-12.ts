import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVolumeMutedStroke12Icon],svg[garden-volume-muted-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m3 7.5l2.6 2.6c.3.3.9.1.9-.3V2.2c0-.4-.5-.7-.9-.3L3 4.5H1c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5zm5.5 0l3-3m-3 0l3 3"></svg:path>`,
})
export class GardenVolumeMutedStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
