import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelAirConditionerHeatingAcAirHvacCoolCoolingColdHotConditioningIcon],svg[streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="7" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M11 7.5v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2m0 3l-.5 3m4.5-3v3m4-3l.5 3"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelAirConditionerHeatingAcAirHvacCoolCoolingColdHotConditioningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
