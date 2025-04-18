import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoPicturesIcon],svg[guidance-no-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5.5l9.857 9.857M23.5 23.5l-6.857-6.857M9.5 13a4.5 4.5 0 0 0 4.5 4.5m-11-8h3m-3-3H.5v14H17M6.5 6.5h1a3 3 0 0 0 3-3h7a3 3 0 0 0 3 3h3v11a3 3 0 0 1-3 3M10.357 10.357a4.5 4.5 0 1 1 6.285 6.285m-6.285-6.285l6.286 6.286"></svg:path>`,
})
export class GuidanceNoPicturesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
