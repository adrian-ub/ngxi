import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonAdd28FilledIcon],svg[fluent-person-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.114 25.719A7.48 7.48 0 0 1 13 20.5c0-1.688.558-3.247 1.5-4.5H5a3 3 0 0 0-3 3v.715C2 23.433 6.21 26 12 26a17 17 0 0 0 3.114-.281M18 8A6 6 0 1 0 6 8a6 6 0 0 0 12 0m2.5 19a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-11a.5.5 0 0 1 .5.5V20h3.5a.5.5 0 0 1 0 1H21v3.5a.5.5 0 0 1-1 0V21h-3.5a.5.5 0 0 1 0-1H20v-3.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentPersonAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
