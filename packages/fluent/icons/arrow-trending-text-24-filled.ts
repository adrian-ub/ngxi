import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingText24FilledIcon],svg[fluent-arrow-trending-text-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.586L12.5 10.086l-1.793-1.793a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414L10 10.414l1.793 1.793a1 1 0 0 0 .564.283c.296-.194.628-.338.985-.418L19 6.414V9a1 1 0 1 0 2 0zm-7 9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentArrowTrendingText24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
