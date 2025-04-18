import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotone18UpRatingIcon],svg[ic-twotone-18-up-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h1.5v1.5H13zm0 2.5h1.5V14H13z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm6.5-9c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1zM7 9h3v6H8.5v-4.5H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8.5 15H10V9H7v1.5h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 15H15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5h1.5v1.5H13zm0 2.5h1.5V14H13z"></svg:path>`,
})
export class IcTwotone18UpRatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
