import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewCarouselIcon],svg[mdi-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v11h4V6M2 17h4V6H2m5 13h10V4H7z"></svg:path>`,
})
export class MdiViewCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
