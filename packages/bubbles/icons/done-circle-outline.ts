import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDoneCircleOutlineIcon],svg[bubbles-done-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m6.75 9l3.294 4.611a1.526 1.526 0 0 0 2.414.09L23.25.749"></svg:path><svg:path d="M16.783 3.824A10.487 10.487 0 1 0 20.8 8.377"></svg:path></svg:g>`,
})
export class BubblesDoneCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
