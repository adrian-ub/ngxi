import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSynchronizeArrowsSquareOutlineIcon],svg[bubbles-synchronize-arrows-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.5 19.747h6.75a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-.75m-3 0H6.75a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.75"></svg:path><svg:path d="m14.25 15.997l-3.75 3.75l3.75 3.75m-4.5-15l3.75-3.75L9.75.997"></svg:path></svg:g>`,
})
export class BubblesSynchronizeArrowsSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
