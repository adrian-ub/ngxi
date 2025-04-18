import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHd24FilledIcon],svg[fluent-hd-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 14.5v-5h.25c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75zM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm1 5a.75.75 0 0 1 .75.75v2.75h2V8.75a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0V13H8v2.25a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.25 8m6.5 0h1A3.25 3.25 0 0 1 18 11.25v1.5A3.25 3.25 0 0 1 14.75 16h-1a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentHd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
