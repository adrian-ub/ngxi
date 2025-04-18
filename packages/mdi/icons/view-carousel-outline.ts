import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewCarouselOutlineIcon],svg[mdi-view-carousel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h4v11H2zm5 13h10V4H7zM9 6h6v11H9zm9 0h4v11h-4z"></svg:path>`,
})
export class MdiViewCarouselOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
