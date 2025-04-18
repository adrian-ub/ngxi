import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMaximizeStroke12Icon],svg[garden-maximize-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 3.5V1C.5.7.7.5 1 .5h2.5m8 3V1c0-.3-.2-.5-.5-.5H8.5m3 8V11c0 .3-.2.5-.5.5H8.5m-8-3V11c0 .3.2.5.5.5h2.5m0-8L1 1m7.5 7.5L11 11M8.5 3.5L11 1M3.5 8.5L1 11"></svg:path>`,
})
export class GardenMaximizeStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
