import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideLayout24FilledIcon],svg[fluent-slide-layout-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v1.75h-11zm0 3.25v3.25c0 .138.112.25.25.25H9V12zm10.75 3.5H10.5V12h7v3.25a.25.25 0 0 1-.25.25M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM6.75 7A1.75 1.75 0 0 0 5 8.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 15.25v-6.5A1.75 1.75 0 0 0 17.25 7z"></svg:path>`,
})
export class FluentSlideLayout24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
