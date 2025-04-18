import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCarouselVideoIcon],svg[icon-park-carousel-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="34" x="11" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="7" height="26" x="4" y="11" stroke="#000"></svg:rect><svg:rect width="7" height="26" x="37" y="11" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 20L28 24L22 28V20Z"></svg:path></svg:g>`,
})
export class IconParkCarouselVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
