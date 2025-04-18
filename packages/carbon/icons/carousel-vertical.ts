import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCarouselVerticalIcon],svg[carbon-carousel-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2M8 22h16V10H8zm16 6v4h-2v-4H10v4H8v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m0-28v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V0h2v4h12V0z"></svg:path>`,
})
export class CarbonCarouselVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
