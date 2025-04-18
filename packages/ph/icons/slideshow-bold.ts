import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlideshowBoldIcon],svg[ph-slideshow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 44H72a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H76V68h104Zm64-132v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0M36 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhSlideshowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
