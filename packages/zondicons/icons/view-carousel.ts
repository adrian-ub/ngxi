import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsViewCarouselIcon],svg[zondicons-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16v2H4v-2H0V4h4V2h12v2h4v12zM14 5.5V4H6v12h8zm2 .5v8h2V6zM4 6H2v8h2z"></svg:path>`,
})
export class ZondiconsViewCarouselIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
