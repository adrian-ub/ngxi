import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationAdd20FilledIcon],svg[fluent-location-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.005 7.005 0 0 1 0-9.904a7 7 0 0 1 9.899 0M10 5a.5.5 0 0 0-.5.5V8H7a.5.5 0 0 0 0 1h2.5v2.5a.5.5 0 0 0 1 0V9H13a.5.5 0 0 0 0-1h-2.5V5.5A.5.5 0 0 0 10 5"></svg:path>`,
})
export class FluentLocationAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
