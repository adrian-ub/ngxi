import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSingleActionsGraduateFemaleOutlineIcon],svg[bubbles-single-actions-graduate-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.358 14.7l-6.631 2.637l6.667 2.353a1 1 0 0 0 .666 0l6.04-2.131a.25.25 0 0 0 .009-.468L17.1 14.7a1 1 0 0 0-.742 0m-6.631 2.637V21"></svg:path><svg:path d="M12.727 18.4v3.15a.75.75 0 0 0 .471.7l3.25 1.2a.75.75 0 0 0 .557 0l3.25-1.2a.75.75 0 0 0 .472-.7V18.4m-7.899-9.3a5.5 5.5 0 0 1-.8-3.054V4.8a4.3 4.3 0 1 0-8.593 0v1.246a5.5 5.5 0 0 1-.8 3.054"></svg:path><svg:path d="M3.433 5.506a5.68 5.68 0 0 0 4.3-1.97a5.7 5.7 0 0 0 4.3 1.97"></svg:path><svg:path d="M11.516 5.484a3.791 3.791 0 0 1-7.573 0M6.727 17.5h-6A7 7 0 0 1 13.089 13"></svg:path></svg:g>`,
})
export class BubblesSingleActionsGraduateFemaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
