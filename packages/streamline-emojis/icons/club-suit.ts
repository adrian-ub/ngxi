import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisClubSuitIcon],svg[streamline-emojis-club-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#525252" d="M34.05 16.05a10.5 10.5 0 1 0-20.1 0a10.5 10.5 0 1 0 7.51 18.73a5.1 5.1 0 0 1-5 5.68a1 1 0 0 0-.95 1a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1a1 1 0 0 0-.95-1a5.1 5.1 0 0 1-5-5.68a10.5 10.5 0 1 0 7.51-18.73Z"></svg:path><svg:path fill="#45413c" d="M12.5 45.5a11.5 1.5 0 1 0 23 0a11.5 1.5 0 1 0-23 0" opacity=".15"></svg:path><svg:path fill="#656769" d="M24 7.5a10.5 10.5 0 0 1 10.2 8a10.3 10.3 0 0 0 .3-2.5a10.5 10.5 0 0 0-21 0a10.3 10.3 0 0 0 .3 2.5a10.5 10.5 0 0 1 10.2-8"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M34.05 16.05a10.5 10.5 0 1 0-20.1 0a10.5 10.5 0 1 0 7.51 18.73a5.1 5.1 0 0 1-5 5.68a1 1 0 0 0-.95 1a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1a1 1 0 0 0-.95-1a5.1 5.1 0 0 1-5-5.68a10.5 10.5 0 1 0 7.51-18.73Z"></svg:path>`,
})
export class StreamlineEmojisClubSuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
