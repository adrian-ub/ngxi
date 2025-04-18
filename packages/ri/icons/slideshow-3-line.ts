import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshow3LineIcon],svg[ri-slideshow-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM4 5v11h16V5zm6 2.5l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
