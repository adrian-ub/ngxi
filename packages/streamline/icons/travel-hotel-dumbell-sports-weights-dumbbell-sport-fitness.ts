import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelDumbellSportsWeightsDumbbellSportFitnessIcon],svg[streamline-travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="4" height="6" x=".5" y="4" rx="1"></svg:rect><svg:rect width="4" height="6" x="9.5" y="4" rx="1"></svg:rect><svg:path d="M4.5 7h5"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelDumbellSportsWeightsDumbbellSportFitnessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
