import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSingleActionsGraduateMaleOutlineIcon],svg[bubbles-single-actions-graduate-male-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.324 14.7l-6.631 2.637l6.667 2.353a1 1 0 0 0 .666 0l6.038-2.131a.25.25 0 0 0 .009-.468L17.062 14.7a1 1 0 0 0-.738 0m-6.631 2.637V21"></svg:path><svg:path d="M12.693 18.4v3.15a.75.75 0 0 0 .472.7l3.25 1.2a.75.75 0 0 0 .557 0l3.25-1.2a.75.75 0 0 0 .471-.7V18.4M2.484 2.223a5.81 5.81 0 0 0 6.483 1.304"></svg:path><svg:path d="M2 4a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m8.5 10a5 5 0 1 0-10 0v3.5H3l.5 6h4l.125-1.5"></svg:path></svg:g>`,
})
export class BubblesSingleActionsGraduateMaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
