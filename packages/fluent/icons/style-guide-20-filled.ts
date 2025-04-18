import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStyleGuide20FilledIcon],svg[fluent-style-guide-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.819 17.259q.111.408.335.74h-.156c-1.104 0-2-.895-2.001-2l-.005-5.535zM4 16.499q0 .228.04.446l-.056-.015a2 2 0 0 1-1.416-2.45l1.426-5.34zm3.655.018a2 2 0 0 0 2.451 1.414l5.416-1.451a2 2 0 0 0 1.413-2.45L14.099 3.482a2 2 0 0 0-2.451-1.413l-5.416 1.45a2 2 0 0 0-1.413 2.449zM9 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentStyleGuide20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
