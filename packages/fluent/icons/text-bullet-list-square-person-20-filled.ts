import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListSquarePerson20FilledIcon],svg[fluent-text-bullet-list-square-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v3.651A3 3 0 0 0 15.5 9a3 3 0 0 0-2.236 1H9.5a.5.5 0 0 0 0 1h3.17a3 3 0 0 0 0 2H9.5a.5.5 0 0 0 0 1h3.764l.009.01A2.5 2.5 0 0 0 11 16.5q0 .25.038.5H5.75A2.75 2.75 0 0 1 3 14.25zM6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m8.5 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentTextBulletListSquarePerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
