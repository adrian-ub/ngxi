import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFeedIcon],svg[gg-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M12.552 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path><svg:path fill-opacity=".8" d="M12.552 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path d="M3.448 4.002a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 8.996a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class GgFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
