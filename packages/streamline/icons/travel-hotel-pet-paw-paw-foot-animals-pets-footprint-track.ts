import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelPetPawPawFootAnimalsPetsFootprintTrackIcon],svg[streamline-travel-hotel-pet-paw-paw-foot-animals-pets-footprint-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="1.5" cy="8" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="4.5" cy="3.5" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9.5" cy="3.5" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="12.5" cy="8" rx="1" ry="1.5"></svg:ellipse><svg:path d="M10 10c0 1.38-1.62 2-3 2s-3-.62-3-2s1-3.5 3-3.5s3 2.12 3 3.5Z"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelPetPawPawFootAnimalsPetsFootprintTrackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
