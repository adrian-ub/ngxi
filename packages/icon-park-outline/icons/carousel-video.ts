import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCarouselVideoIcon],svg[icon-park-outline-carousel-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 7h26v34H11zm-7 4h7v26H4zm33 0h7v26h-7z"></svg:path><svg:path d="m22 20l6 4l-6 4z"></svg:path></svg:g>`,
})
export class IconParkOutlineCarouselVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
