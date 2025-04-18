import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshowFillIcon],svg[ri-slideshow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zM8 10a3 3 0 1 0 3 3H8zm5 0v2h6v-2zm0 4v2h6v-2zM2 3h20v2H2z"></svg:path>`,
})
export class RiSlideshowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
