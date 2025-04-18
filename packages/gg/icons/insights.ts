import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInsightsIcon],svg[gg-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8h4v12H5V10h4V4h6zm-2-2h-2v12h2zm2 4v8h2v-8zm-6 2v6H7v-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgInsightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
