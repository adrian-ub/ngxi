import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighlight20FilledIcon],svg[fluent-highlight-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v3A1.5 1.5 0 0 0 4.5 8h11A1.5 1.5 0 0 0 17 6.5v-3A1.5 1.5 0 0 0 15.5 2zM6 11a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2zm0 1h8v1.074a2 2 0 0 1-1.106 1.789l-6.17 3.085A.5.5 0 0 1 6 17.501z"></svg:path>`,
})
export class FluentHighlight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
