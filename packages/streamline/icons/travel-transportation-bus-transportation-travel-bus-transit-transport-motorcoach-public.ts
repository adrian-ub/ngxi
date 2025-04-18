import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelTransportationBusTransportationTravelBusTransitTransportMotorcoachPublicIcon],svg[streamline-travel-transportation-bus-transportation-travel-bus-transit-transport-motorcoach-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="11.5" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 12v1.5m7-1.5v1.5M1.5 7h11"></svg:path><svg:circle cx="4" cy="9.5" r=".5"></svg:circle><svg:circle cx="10" cy="9.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineTravelTransportationBusTransportationTravelBusTransitTransportMotorcoachPublicIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
