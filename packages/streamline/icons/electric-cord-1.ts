import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineElectricCord1Icon],svg[streamline-electric-cord-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.94 10.952H5.06a3 3 0 0 1-3-3V5.036a1 1 0 0 1 1-1h7.88a1 1 0 0 1 1 1v2.916a3 3 0 0 1-3 3M4.53 4.036V.578m4.94 3.458V.578M7 10.952v2.47"></svg:path>`,
})
export class StreamlineElectricCord1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
