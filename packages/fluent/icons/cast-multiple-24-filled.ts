import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCastMultiple24FilledIcon],svg[fluent-cast-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3A3.25 3.25 0 0 0 5 6.25V8.5h2.25a.75.75 0 0 1 0 1.5H5v.01a3.25 3.25 0 0 0-3 3.24v4.5A3.25 3.25 0 0 0 5.25 21h5a3.25 3.25 0 0 0 3.24-3h.01v-1.75a.75.75 0 0 1 1.5 0V18h3.75A3.25 3.25 0 0 0 22 14.75v-8.5A3.25 3.25 0 0 0 18.75 3zm2.252 11a.998.998 0 1 1 0-1.996a.998.998 0 0 1 0 1.996m-.252-4.993a4.247 4.247 0 0 1 4.247 4.247a.75.75 0 0 1-1.5 0a2.747 2.747 0 0 0-2.747-2.747a.75.75 0 0 1 0-1.5m0-3.007a7.254 7.254 0 0 1 7.254 7.254a.75.75 0 0 1-1.5 0A5.754 5.754 0 0 0 10.25 7.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentCastMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
