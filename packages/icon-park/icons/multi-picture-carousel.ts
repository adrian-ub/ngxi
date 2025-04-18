import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiPictureCarouselIcon],svg[icon-park-multi-picture-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M20 42H28"></svg:path><svg:path d="M34 42H36"></svg:path><svg:path d="M4 42H6"></svg:path><svg:path d="M42 42H44"></svg:path><svg:path d="M12 42H14"></svg:path></svg:g>`,
})
export class IconParkMultiPictureCarouselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
