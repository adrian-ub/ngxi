import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingGiftRewardBoxSocialPresentGiftMediaRatingBowIcon],svg[streamline-shopping-gift-reward-box-social-present-gift-media-rating-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="5" x=".5" y="3" rx="1"></svg:rect><svg:path d="M12.5 8v4.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8M7 3v10.5m3-13L7 3L4 .5"></svg:path></svg:g>`,
})
export class StreamlineShoppingGiftRewardBoxSocialPresentGiftMediaRatingBowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
