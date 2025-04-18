import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesShrinkOutlineIcon],svg[bubbles-shrink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m23.25.748l-9 9m-4.5 11.25v-6.75H3m11.25-11.25v6.75H21m-11.25 4.5l-9 9"></svg:path>`,
})
export class BubblesShrinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
