import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelOneStarOneStarReviewsReviewRatingHotelStarIcon],svg[streamline-travel-hotel-one-star-one-star-reviews-review-rating-hotel-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 1.05a1.18 1.18 0 0 1 2 0l1.94 3.07l2.53.31a1.16 1.16 0 0 1 .75 1.91l-2.11 2.42l.68 3.35a1.17 1.17 0 0 1-.46 1.17a1.19 1.19 0 0 1-1.26.07L7 11.67l-3.07 1.68a1.19 1.19 0 0 1-1.26-.07a1.17 1.17 0 0 1-.46-1.17l.68-3.35L.78 6.34a1.16 1.16 0 0 1 .75-1.91l2.53-.31Z"></svg:path><svg:path d="M7 9.52v-4H6m-.5 4h3"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelOneStarOneStarReviewsReviewRatingHotelStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
