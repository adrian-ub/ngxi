import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMultiPictureCarouselIcon],svg[icon-park-solid-multi-picture-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="currentColor" rx="2"></svg:rect><svg:path d="M20 42h8m6 0h2M4 42h2m36 0h2m-32 0h2"></svg:path></svg:g>`,
})
export class IconParkSolidMultiPictureCarouselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
