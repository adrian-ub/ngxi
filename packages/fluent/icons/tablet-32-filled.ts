import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTablet32FilledIcon],svg[fluent-tablet-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.25A3.25 3.25 0 0 1 5.25 5h21.5A3.25 3.25 0 0 1 30 8.25v15.5A3.25 3.25 0 0 1 26.75 27H5.25A3.25 3.25 0 0 1 2 23.75zM13 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTablet32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
