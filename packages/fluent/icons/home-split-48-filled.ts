import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeSplit48FilledIcon],svg[fluent-home-split-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.373 5.846a3.75 3.75 0 0 0-4.745 0L8.378 16.67A3.75 3.75 0 0 0 7 19.574v19.674a3.75 3.75 0 0 0 3.75 3.75h26.5a3.75 3.75 0 0 0 3.75-3.75V19.574a3.75 3.75 0 0 0-1.377-2.904zM25.25 13.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5a1.25 1.25 0 1 1 2.5 0M24 22c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m1.25 11.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5a1.25 1.25 0 1 1 2.5 0"></svg:path>`,
})
export class FluentHomeSplit48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
