import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentResize28RegularIcon],svg[fluent-resize-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 3h-5A3.75 3.75 0 0 0 3 6.75v2a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 1 6.75 4.5h5a.75.75 0 0 0 0-1.5m-5 20.5a2.25 2.25 0 0 1-2.25-2.25v-6.5a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25zM3 21.25A3.75 3.75 0 0 0 6.75 25h6.5A3.75 3.75 0 0 0 17 21.25v-6.5A3.75 3.75 0 0 0 13.25 11h-6.5A3.75 3.75 0 0 0 3 14.75zM19.25 25a.75.75 0 0 1 0-1.5h2a2.25 2.25 0 0 0 2.25-2.25v-5a.75.75 0 0 1 1.5 0v5A3.75 3.75 0 0 1 21.25 25zM25 11.75a.75.75 0 0 1-1.5 0v-5a2.25 2.25 0 0 0-2.25-2.25h-5a.75.75 0 0 1 0-1.5h5A3.75 3.75 0 0 1 25 6.75z"></svg:path>`,
})
export class FluentResize28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
