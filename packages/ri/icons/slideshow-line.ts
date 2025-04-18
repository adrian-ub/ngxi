import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshowLineIcon],svg[ri-slideshow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zm-9-2h16V8H4zm9-9h5v2h-5zm0 4h5v2h-5zm-4-4v3h3a3 3 0 1 1-3-3M2 3h20v2H2z"></svg:path>`,
})
export class RiSlideshowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
