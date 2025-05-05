import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCarouselIcon],svg[picon-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V0h4v8M0 7V1h1v6m6 0V1h1v6"></svg:path>`,
})
export class PiconCarouselIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
