import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebookError24FilledIcon],svg[fluent-notebook-error-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.498V4.251A2.25 2.25 0 0 1 6.251 2zM6.5 19.88a.625.625 0 1 0 0 1.249a.625.625 0 0 0 0-1.249m0-5.877a.5.5 0 0 0-.492.41l-.008.09v3.998l.008.09a.5.5 0 0 0 .984 0L7 18.5v-3.998l-.008-.09a.5.5 0 0 0-.492-.41m14.25.999a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20V7.002zM14.748 5.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v1.5c0 .38.282.693.648.743l.102.007h6.5a.75.75 0 0 0 .743-.648l.007-.102v-1.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class FluentNotebookError24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
