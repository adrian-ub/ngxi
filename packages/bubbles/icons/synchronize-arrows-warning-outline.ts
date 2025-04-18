import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSynchronizeArrowsWarningOutlineIcon],svg[bubbles-synchronize-arrows-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.707 6.246A9 9 0 0 0 3 12.247V13m2.293 5.249a9 9 0 0 0 15.707-6V11.5"></svg:path><svg:path d="m18.75 13.747l2.25-2.25l2.25 2.25m-18-3L3 12.997l-2.25-2.25M12 6.997v6M12 16a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class BubblesSynchronizeArrowsWarningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
