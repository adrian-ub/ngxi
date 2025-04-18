import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelBellServiceConciergePorterCallRingBellhopBellReceptionIcon],svg[streamline-travel-hotel-bell-service-concierge-porter-call-ring-bellhop-bell-reception-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.25a6.5 6.5 0 0 1 13 0Zm0 2.5h13m-6.5-9v-2.5m-1.5 0h3"></svg:path>`,
})
export class StreamlineTravelHotelBellServiceConciergePorterCallRingBellhopBellReceptionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
