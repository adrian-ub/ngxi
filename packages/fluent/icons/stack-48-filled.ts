import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStack48FilledIcon],svg[fluent-stack-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.25A4.25 4.25 0 0 1 8.25 8h21.5A4.25 4.25 0 0 1 34 12.25v13.5A4.25 4.25 0 0 1 29.75 30H8.25A4.25 4.25 0 0 1 4 25.75zM9.375 32.5a4.25 4.25 0 0 0 3.874 2.5h16.5A9.25 9.25 0 0 0 39 25.75v-8.5a4.25 4.25 0 0 0-2.5-3.874V25.75a6.75 6.75 0 0 1-6.75 6.75zm5 5a4.25 4.25 0 0 0 3.874 2.5h11.5C37.62 40 44 33.62 44 25.75v-3.5a4.25 4.25 0 0 0-2.5-3.874v7.374c0 6.49-5.26 11.75-11.75 11.75z"></svg:path>`,
})
export class FluentStack48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
