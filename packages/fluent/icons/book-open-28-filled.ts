import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookOpen28FilledIcon],svg[fluent-book-open-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4c.98 0 1.865.402 2.5 1.05A3.5 3.5 0 0 1 16.5 4H24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7.5a3.5 3.5 0 0 1-2.5-1.05A3.5 3.5 0 0 1 11.5 24H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM13 20.5v-13A1.5 1.5 0 0 0 11.5 6H4v16h7.5a1.5 1.5 0 0 0 1.5-1.5m2-13v13a1.5 1.5 0 0 0 1.5 1.5H24V6h-7.5A1.5 1.5 0 0 0 15 7.5"></svg:path>`,
})
export class FluentBookOpen28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
