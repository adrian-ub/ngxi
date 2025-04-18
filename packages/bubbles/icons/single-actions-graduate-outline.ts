import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSingleActionsGraduateOutlineIcon],svg[bubbles-single-actions-graduate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.343 14.7l-6.631 2.637l6.667 2.353a1 1 0 0 0 .666 0l6.038-2.131a.25.25 0 0 0 .009-.468L17.081 14.7a1 1 0 0 0-.738 0m-6.631 2.637V21"></svg:path><svg:path d="M12.712 18.4v3.15a.75.75 0 0 0 .472.7l3.25 1.2a.75.75 0 0 0 .557 0l3.25-1.2a.75.75 0 0 0 .471-.7V18.4M3.462 4.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 0 0-8.5 0M.712 17.5A7 7 0 0 1 13.074 13"></svg:path></svg:g>`,
})
export class BubblesSingleActionsGraduateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
