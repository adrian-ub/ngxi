import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesRatingStarOutlineIcon],svg[bubbles-rating-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.729 1.2l3.346 6.629l6.44.638a.805.805 0 0 1 .5 1.374l-5.3 5.253l1.965 7.138a.813.813 0 0 1-1.151.935L12 19.934l-6.52 3.229a.813.813 0 0 1-1.151-.935l1.965-7.138L.99 9.837a.805.805 0 0 1 .5-1.374l6.44-.638L11.271 1.2a.819.819 0 0 1 1.458 0"></svg:path>`,
})
export class BubblesRatingStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
