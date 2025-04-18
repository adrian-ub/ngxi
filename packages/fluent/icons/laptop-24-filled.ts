import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop24FilledIcon],svg[fluent-laptop-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v7.5A2.25 2.25 0 0 1 17.75 16H6.25A2.25 2.25 0 0 1 4 13.75zM2.75 17.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLaptop24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
