import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCarouselVideoIcon],svg[icon-park-twotone-carousel-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCarouselVideo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M11 7h26v34H11z"></svg:path><svg:path d="M4 11h7v26H4zm33 0h7v26h-7z"></svg:path><svg:path fill="#555" d="m22 20l6 4l-6 4z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCarouselVideo0)"></svg:path>`,
})
export class IconParkTwotoneCarouselVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
