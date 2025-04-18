import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSynchronizeArrowOutlineIcon],svg[bubbles-synchronize-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.278 17.49a9.752 9.752 0 1 0-1.528-5.243V14.5"></svg:path><svg:path d="m.75 11.497l3 3l3-3"></svg:path></svg:g>`,
})
export class BubblesSynchronizeArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
