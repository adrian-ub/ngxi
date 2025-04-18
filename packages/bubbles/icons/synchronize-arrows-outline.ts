import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSynchronizeArrowsOutlineIcon],svg[bubbles-synchronize-arrows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.362 7A8.25 8.25 0 0 0 3.75 12.247V14.5M6 17.908a8.25 8.25 0 0 0 14.25-5.66v-1.5"></svg:path><svg:path d="m.75 11.497l3 3l3-3m16.5 2.25l-3-3l-3 3"></svg:path></svg:g>`,
})
export class BubblesSynchronizeArrowsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
