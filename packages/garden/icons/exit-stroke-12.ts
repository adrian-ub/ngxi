import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenExitStroke12Icon],svg[garden-exit-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 2.4l2-1.9v11l-2-1.9zm2 .1H6c.3 0 .5.2.5.5v1m-4 5.5H6c.3 0 .5-.2.5-.5V8M11 6H5m4.5-2l1.6 1.6c.2.2.2.5 0 .7L9.5 8"></svg:path>`,
})
export class GardenExitStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
