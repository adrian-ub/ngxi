import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTaskListSquarePerson20FilledIcon],svg[fluent-task-list-square-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.401A3 3 0 0 0 12.5 12H11a.5.5 0 0 0 0 1h1.67a3 3 0 0 0 .603 1.01A2.5 2.5 0 0 0 11 16.5q0 .25.038.5H6a3 3 0 0 1-3-3zm6.354 1.104a.5.5 0 0 0-.708-.708L7.234 7.808l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 0-.708 0l-1.412 1.412l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015l1.75-1.75a.5.5 0 0 0 0-.707M10.5 7.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.5.5m7 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentTaskListSquarePerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
