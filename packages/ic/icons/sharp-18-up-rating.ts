import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp18UpRatingIcon],svg[ic-sharp-18-up-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z"></svg:path><svg:path fill="currentColor" d="M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcSharp18UpRatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
