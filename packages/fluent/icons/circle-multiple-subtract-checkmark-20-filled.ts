import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleMultipleSubtractCheckmark20FilledIcon],svg[fluent-circle-multiple-subtract-checkmark-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.917 6A7 7 0 0 0 6 12.917A6.002 6.002 0 0 1 7 1a6 6 0 0 1 5.917 5M9.124 6H4.5a.5.5 0 0 0 0 1h3.208a8 8 0 0 1 1.416-1M19 13a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-3.146-1.854a.5.5 0 0 0-.708 0L12.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentCircleMultipleSubtractCheckmark20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
