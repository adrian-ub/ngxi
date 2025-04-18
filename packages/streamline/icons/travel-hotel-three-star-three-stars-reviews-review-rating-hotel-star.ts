import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelThreeStarThreeStarsReviewsReviewRatingHotelStarIcon],svg[streamline-travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 1.05a1.18 1.18 0 0 1 2 0l1.94 3.07l2.53.31a1.16 1.16 0 0 1 .75 1.91l-2.11 2.42l.68 3.35a1.17 1.17 0 0 1-.46 1.17a1.19 1.19 0 0 1-1.26.07L7 11.67l-3.07 1.68a1.19 1.19 0 0 1-1.26-.07a1.17 1.17 0 0 1-.46-1.17l.68-3.35L.78 6.34a1.16 1.16 0 0 1 .75-1.91l2.53-.31Z"></svg:path><svg:path d="M5.5 5.52h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2m3-2h-3"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelThreeStarThreeStarsReviewsReviewRatingHotelStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
