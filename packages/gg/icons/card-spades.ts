import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCardSpadesIcon],svg[gg-card-spades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.146 11.707a2 2 0 0 0 2.829 2.829L12 14.51l.025.026a2 2 0 1 0 2.829-2.829L12.025 8.88L12 8.904l-.025-.025z"></svg:path><svg:path fill-rule="evenodd" d="M3 20a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm3 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCardSpadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
