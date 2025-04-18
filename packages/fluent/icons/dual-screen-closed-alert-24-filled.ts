import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenClosedAlert24FilledIcon],svg[fluent-dual-screen-closed-alert-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.499 2h.002A4.01 4.01 0 0 1 20.5 5.999v2.52l1.384 1.66A.5.5 0 0 1 21.5 11h-10a.5.5 0 0 1-.384-.82L12.5 8.519v-2.52A4.01 4.01 0 0 1 16.499 2M5.75 5h5.853a5 5 0 0 0-.103.996v2.16L10.348 9.54A1.5 1.5 0 0 0 11.5 12h2.17A3 3 0 0 0 17 13.959v4.791A2.25 2.25 0 0 1 14.75 21h-9a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 5.75 5m9.754 7.732a2 2 0 0 1-.727-.732h3.446a1.984 1.984 0 0 1-2.719.732"></svg:path>`,
})
export class FluentDualScreenClosedAlert24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
