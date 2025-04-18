import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesRatingStarSolidIcon],svg[bubbles-rating-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.15 4.365a.75.75 0 0 0-.703-.49H8.403a.25.25 0 0 1-.236-.167L7.075.61a.75.75 0 0 0-1.405 0l-.003.008l-1.09 3.089a.25.25 0 0 1-.235.167H1.297A.75.75 0 0 0 .816 5.2l2.592 2.15a.25.25 0 0 1 .077.272l-1.089 3.265a.75.75 0 0 0 1.155.842l2.673-1.96a.25.25 0 0 1 .296 0l2.672 1.96a.75.75 0 0 0 1.156-.842L9.258 7.62a.25.25 0 0 1 .078-.272l2.597-2.153a.75.75 0 0 0 .217-.83"></svg:path>`,
})
export class BubblesRatingStarSolidIcon {
  readonly viewBox = input("0 0 13 12")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
