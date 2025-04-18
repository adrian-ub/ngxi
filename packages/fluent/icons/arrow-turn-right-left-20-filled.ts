import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightLeft20FilledIcon],svg[fluent-arrow-turn-right-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.472 15.447a.75.75 0 0 1-.393-1.031l2.5-5.001a.75.75 0 1 1 1.342.67L6.299 13.33l9.818-4.32L5.455 4.44a.75.75 0 0 1 .59-1.378l11.192 4.796c1.005.431 1.012 1.853.011 2.293L6.782 14.756l3.246 1.298a.75.75 0 1 1-.556 1.392z"></svg:path>`,
})
export class FluentArrowTurnRightLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
