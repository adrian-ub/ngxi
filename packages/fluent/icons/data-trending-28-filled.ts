import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending28FilledIcon],svg[fluent-data-trending-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v17a2 2 0 0 0 2 2h17a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1m19.002 6.412V12a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.584L16.5 13.086l-2.293-2.293a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414l4.793-4.793l2.293 2.293a1 1 0 0 0 1.414 0z"></svg:path>`,
})
export class FluentDataTrending28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
