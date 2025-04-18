import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon],svg[streamline-interface-award-half-star-reward-rating-rate-social-star-media-favorite-like-stars-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25.5a.54.54 0 0 0-.49.32L8.17 4.18a.52.52 0 0 1-.41.31L4.22 5a.58.58 0 0 0-.3 1l2.56 2.63a.58.58 0 0 1 .16.5L6 12.83a.56.56 0 0 0 .8.6l3.2-1.74a.59.59 0 0 1 .26-.07Z"></svg:path>`,
})
export class StreamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
