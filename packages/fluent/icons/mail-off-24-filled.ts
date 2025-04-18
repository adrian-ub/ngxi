import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailOff24FilledIcon],svg[fluent-mail-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25a3.25 3.25 0 0 0-1.454 2.394l8.078 4.231l2.422 2.422l-.168.087a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005l1.785 1.785a.75.75 0 0 0 1.061-1.06zm12.02 9.898l6.262 6.262A3.24 3.24 0 0 0 22 16.75V8.608zM7.182 4l7.007 7.007l7.795-4.083A3.25 3.25 0 0 0 18.75 4z"></svg:path>`,
})
export class FluentMailOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
