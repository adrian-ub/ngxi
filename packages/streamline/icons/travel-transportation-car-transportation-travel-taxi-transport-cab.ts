import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelTransportationCarTransportationTravelTaxiTransportCabIcon],svg[streamline-travel-transportation-car-transportation-travel-taxi-transport-cab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 10.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H11l-.77-2.32a1 1 0 0 0-1-.68H5.22a1 1 0 0 0-1 .68L3.5 6.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"></svg:path><svg:circle cx="3.5" cy="10.5" r="2"></svg:circle><svg:circle cx="10.5" cy="10.5" r="2"></svg:circle><svg:path d="M5.5 10.5h3M7 3.5v-2"></svg:path></svg:g>`,
})
export class StreamlineTravelTransportationCarTransportationTravelTaxiTransportCabIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
