import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDoneSquareOutlineIcon],svg[bubbles-done-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m6.75 9l3.294 4.611a1.526 1.526 0 0 0 2.414.09L23.25.749"></svg:path><svg:path d="M21.75 10.5v9.75a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3H16.5"></svg:path></svg:g>`,
})
export class BubblesDoneSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
