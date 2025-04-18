import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataHistogram24FilledIcon],svg[fluent-data-histogram-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.23a2.25 2.25 0 0 1 2.25-2.25h1.5A2.25 2.25 0 0 1 15 5.23V21H9zM7.5 10H5.25A2.25 2.25 0 0 0 3 12.25v8c0 .415.336.75.75.75H7.5zm9 11h3.75a.75.75 0 0 0 .75-.75v-11A2.25 2.25 0 0 0 18.75 7H16.5z"></svg:path>`,
})
export class FluentDataHistogram24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
