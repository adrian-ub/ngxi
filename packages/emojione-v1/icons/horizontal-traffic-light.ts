import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1HorizontalTrafficLightIcon],svg[emojione-v1-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bfc7cb" d="M13.721 47.999C6.146 47.999 0 41.375 0 33.203s6.146-14.797 13.721-14.797H50.28c7.577 0 13.721 6.624 13.721 14.797C64.001 41.375 57.857 48 50.28 48z"></svg:path><svg:path fill="#1f2e35" d="M15.279 45.87c-6.937 0-12.562-5.625-12.562-12.565c0-6.937 5.624-12.564 12.562-12.564h33.472c6.936 0 12.563 5.626 12.563 12.564c0 6.94-5.627 12.565-12.563 12.565z"></svg:path><svg:circle cx="50.35" cy="33.31" r="8.121" fill="#ec1c24"></svg:circle><svg:circle cx="32.02" cy="33.31" r="8.121" fill="#ffdd15"></svg:circle><svg:circle cx="13.743" cy="33.31" r="8.121" fill="#4fba80"></svg:circle>`,
})
export class EmojioneV1HorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
