import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelPoolLadder2PoolStairsSwimSwimmingWaterLadderIcon],svg[streamline-travel-hotel-pool-ladder-2-pool-stairs-swim-swimming-water-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5m2-11a2 2 0 0 1 4 0v7m3-9a2 2 0 0 1 2 2v7m-5-5h5m-5 3h5"></svg:path>`,
})
export class StreamlineTravelHotelPoolLadder2PoolStairsSwimSwimmingWaterLadderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
