import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrending16RegularIcon],svg[fluent-arrow-trending-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.496 4l5.048.002l.086.015l.063.02l.058.03l.062.042l.058.054l.04.05l.035.058l.032.078l.012.043l.011.086V9.5a.5.5 0 0 1-.991.09l-.008-.09L13 5.707l-5.143 5.147a.5.5 0 0 1-.638.058l-.069-.058L5.5 9.207l-2.647 2.647a.5.5 0 0 1-.765-.638l.057-.07l3-3a.5.5 0 0 1 .638-.058l.07.058l1.65 1.647L12.293 5H8.496a.5.5 0 0 1-.492-.41l-.008-.09a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentArrowTrending16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
