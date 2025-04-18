import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSmileyPinOutlineIcon],svg[bubbles-smiley-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 .75a7.7 7.7 0 0 1 7.7 7.7c0 3.5-5.211 11.665-7.061 14.454a.773.773 0 0 1-1.284 0C9.508 20.117 4.3 11.953 4.3 8.453A7.7 7.7 0 0 1 12 .75"></svg:path><svg:path d="M10.5 6.752a1.39 1.39 0 0 0-2.4 0m5.4 0a1.39 1.39 0 0 1 2.4 0m-7.383 3.767a3.84 3.84 0 0 0 6.973 0"></svg:path></svg:g>`,
})
export class BubblesSmileyPinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
