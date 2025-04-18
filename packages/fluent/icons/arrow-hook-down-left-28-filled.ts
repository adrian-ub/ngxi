import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownLeft28FilledIcon],svg[fluent-arrow-hook-down-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.218 8.023C20.01 6.778 18.242 6 16 6H9a1 1 0 1 0 0 2h7c1.758 0 2.99.597 3.782 1.415c.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C18.99 16.403 17.758 17 16 17H8.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L8.414 19H16c2.242 0 4.01-.778 5.218-2.023C22.414 15.744 23 14.113 23 12.5s-.586-3.244-1.782-4.477"></svg:path>`,
})
export class FluentArrowHookDownLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
