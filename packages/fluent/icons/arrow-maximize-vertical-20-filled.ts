import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximizeVertical20FilledIcon],svg[fluent-arrow-maximize-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.576 1.334a.6.6 0 0 1 .849 0l2.121 2.121a.6.6 0 0 1-.848.849L10.6 3.207V7.5a.6.6 0 1 1-1.2 0V3.207L8.303 4.304a.6.6 0 0 1-.848-.849zM3.9 10a.6.6 0 0 1 .6-.6h11a.6.6 0 1 1 0 1.2h-11a.6.6 0 0 1-.6-.6m6.7 6.794V12.5a.6.6 0 0 0-1.2 0v4.294l-1.097-1.097a.6.6 0 0 0-.848.848l2.121 2.122a.6.6 0 0 0 .849 0l2.121-2.122a.6.6 0 1 0-.848-.848z"></svg:path>`,
})
export class FluentArrowMaximizeVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
