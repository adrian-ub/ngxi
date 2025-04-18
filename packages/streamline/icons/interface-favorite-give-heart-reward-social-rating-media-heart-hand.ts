import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon],svg[streamline-interface-favorite-give-heart-reward-social-rating-media-heart-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h2A2.5 2.5 0 0 1 5 11h0m-3 0h5a2 2 0 0 1 2 2h0a.5.5 0 0 1-.5.5h-8m8.25-5l-4-3.7c-2.18-2.19 1-6.43 4-3c3-3.42 6.21.82 4 3Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
