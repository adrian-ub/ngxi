import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshowViewIcon],svg[ri-slideshow-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 10h16V5H4zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3z"></svg:path>`,
})
export class RiSlideshowViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
