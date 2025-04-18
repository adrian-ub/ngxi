import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSlideshowIcon],svg[ic-sharp-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8v8l5-4zm11-5H3v18h18zm-2 16H5V5h14z"></svg:path>`,
})
export class IcSharpSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
