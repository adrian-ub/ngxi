import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayListCheckIcon],svg[gg-play-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6H3v2h12zm0 4H3v2h12zM3 14h8v2H3zm8.99 1.025l1.415-1.414l2.121 2.121l4.243-4.242l1.414 1.414l-5.657 5.657z"></svg:path>`,
})
export class GgPlayListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
