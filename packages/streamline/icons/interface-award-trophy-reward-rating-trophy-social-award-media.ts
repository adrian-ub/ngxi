import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon],svg[streamline-interface-award-trophy-reward-rating-trophy-social-award-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m-2.5 0h5m-6-8a3 3 0 0 1-3-3v-1H4v4Zm7 0a3 3 0 0 0 3-3v-1H10v4Z"></svg:path><svg:path d="M10 5.5a3 3 0 0 1-6 0v-5h6Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
