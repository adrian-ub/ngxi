import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelBed2BedDoubleBedroomBedroomsQueenKingFullHotelIcon],svg[streamline-travel-hotel-bed-2-bed-double-bedroom-bedrooms-queen-king-full-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M7 3.5H3v-3m8 0v3H7v-3M.5 6h13"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelBed2BedDoubleBedroomBedroomsQueenKingFullHotelIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
