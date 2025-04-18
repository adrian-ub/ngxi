import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlideshow4LineIcon],svg[ri-slideshow-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 5v14h16V5h-4.17A3 3 0 0 1 13 7h-2a3 3 0 0 1-2.83-2zm7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 6l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
