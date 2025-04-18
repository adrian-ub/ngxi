import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon],svg[streamline-interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
