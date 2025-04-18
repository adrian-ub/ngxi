import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshow2LineIcon],svg[ri-slideshow-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zm-8-2h14V4H5zm5-9l5 3.5l-5 3.5z"></svg:path>`,
})
export class RiSlideshow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
