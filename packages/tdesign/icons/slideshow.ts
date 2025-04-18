import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSlideshowIcon],svg[tdesign-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v18H6zm2 2v14h8V5zM1 5h3.5v14H1v-2h1.5V7H1zm18.5 0H23v2h-1.5v10H23v2h-3.5z"></svg:path>`,
})
export class TdesignSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
