import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingLeft24FilledIcon],svg[fluent-padding-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 0 0-1 1v1.75a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m0 5.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m0 7a1 1 0 0 0-1 1V19a1 1 0 1 0 2 0v-1.75a1 1 0 0 0-1-1M21 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1M5.293 12.707a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L8.414 11H18a1 1 0 1 1 0 2H8.414l3.293 3.293a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class FluentPaddingLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
