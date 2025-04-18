import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerParkingCircleFilledIcon],svg[tabler-parking-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m1.334 5H10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3h2.334C14.85 13 16 11.62 16 10s-1.15-3-2.666-3m0 2c.323 0 .666.411.666 1s-.343 1-.666 1H11V9z"></svg:path>`,
})
export class TablerParkingCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
