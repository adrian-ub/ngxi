import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleAdd32FilledIcon],svg[fluent-people-add-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-9 9c0-2.712 1.2-5.143 3.096-6.793A3 3 0 0 0 16 17H5a3 3 0 0 0-3 3v.15S2 26 10.5 26c1.442 0 2.64-.168 3.633-.448A9 9 0 0 1 14 24m9 7.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V23h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V24.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentPeopleAdd32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
