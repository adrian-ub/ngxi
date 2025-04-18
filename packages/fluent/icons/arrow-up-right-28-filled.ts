import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight28FilledIcon],svg[fluent-arrow-up-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.293 24.707a1 1 0 0 1 0-1.414L21.586 5H13a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6.414L4.707 24.707a1 1 0 0 1-1.414 0"></svg:path>`,
})
export class FluentArrowUpRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
